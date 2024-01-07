const { User, Thought } = require('../models/index');

module.exports = { 

    async getAllThoughts (req, res) {
        try {
            const getAllThoughts = await Thought.find({})
            .select('-__v');  // remove document version from response
            
            res.json({getAllThoughts, messages: "All Thoughts RETRIEVED!"})
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async getThought (req, res) {
        try {
            const getOneThought = await Thought.findOne({_id: req.params.thoughtId})
            .select('-__v');  // remove document version from response

            if (!getOneThought) {
                return res.status(404).json({ message: 'No thought with that ID' });                
            }

            res.json({getOneThought, message: "Thought RETRIEVED"})
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },


    async postThought (req, res) {
        
        try {
            const thought = await Thought.create(req.body);

            const postOneThought = await User.findByIdAndUpdate(
                req.body.userId,                
                { $addToSet: { thoughts: thought._id} },
                { runValidators: true, new: true }
            );
    
            if (!postOneThought) {
                return res.status(404).json({
                message: 'Thought created, but found no matching username',
                })
            }
        
            res.json({postOneThought, message: 'Thought POSTED'});
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
    },

    async putThought (req, res) {
        try {
            const putOneThought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!putOneThought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json({putOneThought,message: 'Thought UPDATED!'});
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res) {
        try {
            const deleteOneThought = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId },                
            );

            if (!deleteOneThought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json({deleteOneThought, message: 'Thought DELETED!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async postReaction(req, res) {
        try {
            
            const postOneReaction = await Thought.findOneAndUpdate( // Note that the parent document is a findOneAndUpdate
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body} },              // $addtoset adds a subdocument to the array
                { new: true },
            );

            if (!postOneReaction) {
                return res.status(404).json({
                message: 'Reaction created, but found no thought with that ID',
                })
            }
        
            res.json({postOneReaction, message: 'Reacted POSTED!'});
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
    },

    async deleteReaction(req, res) {
        try {
            const deleteOneReaction = await Thought.findOneAndUpdate(   // Note that the parent document is a findOneAndUpdate
                { _id: req.params.thoughtId },                          // Find this thought
                { $pull: { reactions: {_id: req.params.reactionId}}},   // $pull (deletes) the reaction (subdocument)
                { runValidators: true, new: true }
            )
            
            if (!deleteOneReaction) {
                return res.status(404).json({ message: 'No Reaction with that ID' });
            }

            res.json({deleteOneReaction, message: 'Reaction DELETED!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

}


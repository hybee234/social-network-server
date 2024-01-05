const { User, Thought } = require('../models/index');

module.exports = { 

    async getAllThoughts (req, res) {
        try {
            const getAllThoughts = await Thought.find({})
            .select('-__v')
            res.json(getAllThoughts)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async getThought (req, res) {
        try {
            const getOneThought = await Thought.find({_id: req.params.thoughtId})

            if (!getOneThought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(getOneThought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async postThought (req, res) {
        try {
            const postOneThought = await Thought.create(req.body)
            
            res.json(postOneThought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
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

            res.json(putOneThought);
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

            res.json(deleteOneThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },


    async postReaction(req, res) {
        try {
            const postOneReaction = await Thought.create(req.body)

            //check thoughtID

            res.json(postOneReaction)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },



}


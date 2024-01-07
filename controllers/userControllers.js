const { User, Thought } = require('../models');

module.exports = { 

    async getAllUsers (req, res) {
        try {
            const getAllUsers = await User.find({})
            .select('-__v');  // remove document version from response
            res.json(getAllUsers)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async getUser (req, res) {
        try {
            const getOneUser = await User.find({_id: req.params.userId})
            .populate({ path: 'thoughts', select: '-__v' })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v');  // remove document version from response

            if (!getOneUser) {
                return res.status(404).json({ message: 'User ID not found' });
            }

            res.json(getOneUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async postUser (req, res) {
        try {
            const postOneUser = await User.create(req.body)         
            
            if (!postOneUser) {
                return res.status(404).json({ message: 'Something went wrong' });                
            }

            res.json(postOneUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async putUser(req, res) {
        try {
            const putOneUser = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            )


            if (!putOneUser) {
                return res.status(404).json({ message: 'User ID not found' });
            }

            res.json(putOneUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const deleteOneUser = await User.findOneAndDelete(
                { _id: req.params.userId },                
            )


            if (!deleteOneUser) {
                return res.status(404).json({ message: 'User ID not found' });
            }

            res.json(deleteOneUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}

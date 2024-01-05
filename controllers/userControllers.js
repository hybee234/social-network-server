const { User, Thought } = require('../models');

const userControllers = {

    async getUsers (req, res) {
        try {
            const getAllUsers = await User.find({})
            .select('-__v')
            res.json(getAllUsers)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async getUser (req, res) {
        try {
            const getOneUser = await User.find({_id: req.params.userId})
            .select('-__v')
            res.json(getOneUser)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async postUser (req, res) {
        try {
            const postOneUser = await User.create(req.body)
            
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
            );

            if (!putOneUser) {
                return res.status(404).json({ message: 'No user with that ID' });
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
            );

            if (!deleteOneUser) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(deleteOneUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}

module.exports = userControllers
const router = require('express').Router();

const {
    getAllUsers,
    getUser,
    postUser,
    putUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('./../../controllers/userControllers') 


// /api/users
router.route('/').get(getAllUsers).post(postUser)

// /api/users/:userId
router.route('/:userId').get(getUser).put(putUser).delete(deleteUser)


// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)


module.exports = router;
const router = require('express').Router();

const {
    getAllUsers,
    getUser,
    postUser,
    putUser,
    deleteUser,
} = require('./../../controllers/userControllers') 


// /api/users
router.route('/').get(getAllUsers).post(postUser)

// /api/users/:userId
router.route('/:userId').get(getUser).put(putUser).delete(deleteUser)


// //route to add and remove friends
// router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)


module.exports = router;
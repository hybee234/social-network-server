const router = require('express').Router();

const {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser,
} = require('./../../controllers/userControllers') 


// /api/users
// route to get users, get a single user, add a user, update user, and delete user
router.route('/').get(getUsers).post(postUser)

router.route('/:userId').get(getUser).put(putUser).delete(deleteUser)

// //route to add and remove friends
// router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)


module.exports = router;
const router = require('express').Router();

const {
    getAllThoughts,
    getThought,
    postThought,
    putThought,
    deleteThought,
    postReaction,
} = require('./../../controllers/thoughtControllers') 


// /api/thoughts
router.route('/').get(getAllThoughts).post(postThought)

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThought).put(putThought).delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughId/reactions').post(postReaction)

module.exports = router;
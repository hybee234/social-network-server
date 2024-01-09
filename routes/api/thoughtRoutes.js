const router = require('express').Router();

const {
    getAllThoughts,
    getThought,
    postThought,
    putThought,
    deleteThought,
    postReaction,
    deleteReaction,
} = require('./../../controllers/thoughtControllers') 


// /api/thoughts
router.route('/').get(getAllThoughts).post(postThought)

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThought).put(putThought).delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(postReaction)

// /api/thoughts/:thoughtid/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;
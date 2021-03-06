const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controllers');

router
.route('/')
.get(getAllThought)
.post(createThought);

router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);


router.route('/:thoughtId').post(addReaction);


router.route('/:thoughtId/:reactionId').delete(removeReaction);


module.exports = router;
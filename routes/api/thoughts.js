const router = require('express').Router();
const {
  getthoughts,
  getSinglethought,
  createthought,
  updatethought,
  deletethought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getthoughts).post(createthought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSinglethought)
  .put(updatethought)
  .delete(deletethought);

  // post reaction
  router.route("/:thoughtId/reactions").post(addReaction);

  // delete reaction
  router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);


module.exports = router;

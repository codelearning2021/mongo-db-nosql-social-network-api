const router = require('express').Router();
const {
  getUsers,
  getSingleuser,
  createuser,
  deleteuser,
  addfriend,
  removefriend,
} = require('../../controllers/userController');

// /api/users
router.route("/").get(getUsers).post(createuser);

// /api/users/:userId
router.route('/:userId').get(getSingleuser).delete(deleteuser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addfriend).delete(removefriend);

module.exports = router;

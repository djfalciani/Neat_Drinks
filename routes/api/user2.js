const router = require("express").Router();
const userController = require("../../controllers/usersController");
const authController = require("../../controllers/authController");

// Matches with "/api/user2"
router.route("/")
// Post Routes 1) login 2) signup
.post(authController.login);
// Get Routes 1)logout 2)user_data
// Matches with "/api/user2/login"
router.route("/login")
.post(authController.login);
//   .get(bookController.findAll)
//   .post(bookController.create);

// Matches with "/api/user2/:id"
router
  .route("/:id")
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove);

module.exports = router;

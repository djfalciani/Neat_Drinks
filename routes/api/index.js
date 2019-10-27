const router = require("express").Router();
const drinksController = require("../../controllers/drinksController");
const usersController = require("../../controllers/usersController");

// Matches with "/api/posts"
router.route("/ingredients").get(drinksController.findAllIngredients);
// .post(drinksController.create);
router.route("/user/:id").get(usersController.findOneUser);
router.route("/userrated/:id").get(usersController.findUserRatedDrinks);
router.route("/usercreated/:id").get(usersController.findUserCreatedDrinks);
// Matches with "/api/posts/:id"
// router
//   .route("/:id")
//   .get(drinksController.findById)
//   .put(drinksController.update)
//   .delete(drinksController.remove);

module.exports = router;

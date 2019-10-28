const router = require("express").Router();
const drinksController = require("../../controllers/drinksController");
const usersController = require("../../controllers/usersController");

// Matches with "/api/ingredients"
router.route("/ingredients").get(drinksController.findAllIngredients);

router.route("/drink/:id").get(drinksController.findOneDrink);

router.route("/createdrink").post(drinksController.createRecipe);
router.route("/reviews/:id").get(drinksController.findDrinkReviews);
router.route("/reviews2/:id").get(drinksController.findDrinkReviews2);

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

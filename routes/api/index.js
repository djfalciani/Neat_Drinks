const router = require("express").Router();
const drinksController = require("../../controllers/drinksController");
const usersController = require("../../controllers/usersController");

// Matches with "/api/posts"
router.route("/ingredients").get(drinksController.findAllIngredients);
// .post(drinksController.create);
router.route("/user").get(usersController.findOneUser);

// Matches with "/api/posts/:id"
// router
//   .route("/:id")
//   .get(drinksController.findById)
//   .put(drinksController.update)
//   .delete(drinksController.remove);

module.exports = router;

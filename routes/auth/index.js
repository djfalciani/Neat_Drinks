// Requiring our models and passport as we've configured it
const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();
// const authController = require("../../controllers/authController");
const userController = require("../../controllers/usersController");

router.post("/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

router.post("/signup", function(req, res) {
    db.User.create({
        email: req.body.newUserData.email,
        password: req.body.newUserData.password,
        // UserTypeId: req.body.newUserData.userTypeId,
        UserTypeId: 2,
        display_name: req.body.newUserData.display_name
    })
    .then(function(dbUser) {
    //   console.log("in signup route after");
    //   console.log(dbUser.dataValues);
      res.redirect(307, "/auth/login");
    })
    .catch(function(err) {
    //   console.log("in signup route error");
    //   console.log(err);
      res.status(401).json(err);
    });
});

router.get("/user/:id",userController.findOneUser);
// router.route("/bar/:id").get(drinksController.findOneDrink);

module.exports = router;
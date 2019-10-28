// Requiring our models
var db = require("../models");

module.exports = {
  // GET route for getting a user
  findOneUser: function(req, res) {
    // console.log(req.params.id);
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
    // console.log("Hello you are in the find one User call");
  },

  findUserRatedDrinks: function(req, res) {
    db.Drink_User_Rating.findAll({
      where: {
        UserId: req.params.id
      }
    })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
    console.log("Hello you are in the find Rated Drinks by  User call");
  },

  findUserCreatedDrinks: function(req, res) {
    db.Drink.findAll({
      where: {
        UserId: req.params.id
      }
    })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
    console.log("🇪🇭 you are in the find created Drinks by  User call");
  }
};

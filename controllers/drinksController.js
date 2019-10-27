// Requiring our models
var db = require("../models");

module.exports = {
  // GET route for getting all Ingredients
  findOneDrink: function(req, res) {
    db.Drink.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
    // console.log("Hello you are in the find one User call");
  },
  findAllIngredients: function(req, res) {
    db.Ingredient.findAll({})
      .then(dbIngredients => res.json(dbIngredients))
      .catch(err => res.status(422).json(err));
    // console.log("hello");
  },
  findDrinkReviews: function(req, res) {
    db.Drink_User_Rating.findAll({
      where: {
        DrinkId: req.params.id
      }
    })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  createRecipe: function(req, res) {
    console.log(req.body);
    db.Drink.create({
      UserId: req.body.UserId,
      dislpay_name: req.body.dislpay_name,
      instruction: req.body.instruction
    }).then(function(dbRecipie) {
      res.json(dbRecipie);
    });
  }
};

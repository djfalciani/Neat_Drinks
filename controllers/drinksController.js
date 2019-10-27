// Requiring our models
var db = require("../models");

module.exports = {
  // GET route for getting all Ingredients

  findAllIngredients: function(req, res) {
    db.Ingredient.findAll({})
      .then(dbIngredients => res.json(dbIngredients))
      .catch(err => res.status(422).json(err));
      console.log("hello");
  }
};

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
  findDrinkReviews2: function(req, res) {

    // db.Drink_User_Rating.findAll({
    //   where: {DrinkId: req.params.id},
    //   include: [db.User]
    // })
    const query = `SELECT dur.*, t.display_name User_Name, d.dislpay_name Drink_Name FROM neat_drinks_db.drink_user_ratings As dur INNER JOIN neat_drinks_db.users as t on dur.UserId = t.id INNER JOIN neat_drinks_db.drinks as d on dur.DrinkId = d.id where dur.DrinkId = ${req.params.id};`;
    db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT})

      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};

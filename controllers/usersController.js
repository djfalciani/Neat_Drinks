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
  },

  findUserRatedDrinks: function(req, res) {
    db.Drink_User_Rating.findAll({
      where: {
        UserId: req.params.id
      }
    })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  
  findUserRatedDrinks2: function(req, res) {
    let query = `Select dur.DrinkId, d.dislpay_name drink_Name, dur.UserId, u.display_name, dur.Rating, dur.Review, d.ingredient_Detail, d.instruction, dur.createdAt from neat_drinks_db.drink_user_ratings dur, neat_drinks_db.drinks d, neat_drinks_db.users u where 	dur.DrinkId = d.id and dur.UserId = u.id and u.id = ${req.params.id} order by dur.createdAt desc`;
    // console.log(query);
    db.sequelize
      .query(query, { type: db.sequelize.QueryTypes.SELECT })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  findUserCreatedDrinks: function(req, res) {
    db.Drink.findAll({
      where: {
        UserId: req.params.id
      }
    })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};

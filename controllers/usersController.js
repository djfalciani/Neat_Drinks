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
    let query = "";
    if (process.env.NODE_ENV === "production") {
      query = `Select dur.DrinkId, d.dislpay_name drink_Name, dur.UserId, u.display_name, dur.Rating, dur.Review, d.ingredient_Detail, d.instruction, dur.createdAt from c9o52bgidux04ro3.Drink_User_Ratings dur, c9o52bgidux04ro3.Drinks d, c9o52bgidux04ro3.Users u where dur.DrinkId = d.id and dur.UserId = u.id and u.id = ${req.params.id} order by dur.createdAt desc;`
      // query = `Select dur.DrinkId, d.dislpay_name drink_Name, dur.UserId, u.display_name, dur.Rating, dur.Review, d.ingredient_Detail, d.instruction, dur.createdAt from c9o52bgidux04ro3.drink_user_ratings dur, c9o52bgidux04ro3.drinks d, c9o52bgidux04ro3.users u where 	dur.DrinkId = d.id and dur.UserId = u.id and u.id = ${req.params.id} order by dur.createdAt desc`;
    } else {
      query = `Select dur.DrinkId, d.dislpay_name drink_Name, dur.UserId, u.display_name, dur.Rating, dur.Review, d.ingredient_Detail, d.instruction, dur.createdAt from neat_drinks_db.drink_user_ratings dur, neat_drinks_db.drinks d, neat_drinks_db.users u where 	dur.DrinkId = d.id and dur.UserId = u.id and u.id = ${req.params.id} order by dur.createdAt desc`;
    }

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

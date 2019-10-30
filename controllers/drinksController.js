const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
    db.Drink.create({
      UserId: req.body.UserId,
      dislpay_name: req.body.dislpay_name,
      instruction: req.body.instruction
    }).then(function(dbRecipie) {
      res.json(dbRecipie);
    });
  },
  createReview: function(req, res) {
    // console.log(req.body);
    db.Drink_User_Rating.create({
      Rating: req.body.Rating,
      Review: req.body.Review,
      DrinkId: req.body.DrinkId,
      UserId: req.body.UserId
    }).then(function(dbReview) {
      res.json(dbReview);
    });
  },
  createReview2: function(req, res) {
    // console.log(req.body);
    let query = "INSERT INTO `neat_drinks_db`.`Drink_User_Ratings` (`Rating`, `Review`, `createdAt`, `updatedAt`, `DrinkId`, `UserId`)" + ` VALUES ('${req.body.Rating}', '${req.body.Review}', sysdate(), Sysdate(), '${req.body.DrinkId}', '${req.body.UserId}');`;
    // console.log(query);
    db.sequelize
      .query(query, { type: db.sequelize.QueryTypes.INSERT })
      .then(dbReview => res.json(dbReview))
      .catch(err => res.status(422).json(err));

    // db.Drink_User_Rating.create({
    //   Rating: req.body.Rating,
    //   Review: req.body.Review,
    //   DrinkId: req.body.DrinkId,
    //   UserId: req.body.UserId
    // }).then(function(dbReview) {
    //   res.json(dbReview);
    // });
  },
  findDrinkReviews2: function(req, res) {
    // db.Drink_User_Rating.findAll({
    //   where: {DrinkId: req.params.id},
    //   include: [db.User]
    // })
    // const query = `SELECT dur.*, t.display_name User_Name, d.dislpay_name Drink_Name FROM neat_drinks_db.drink_user_ratings As dur INNER JOIN neat_drinks_db.users as t on dur.UserId = t.id INNER JOIN neat_drinks_db.drinks as d on dur.DrinkId = d.id where dur.DrinkId = ${req.params.id};`;
    const query = `SELECT dur.*, t.display_name User_Name, d.dislpay_name Drink_Name, d.UserId drinkOwner, (select u2.display_name from neat_drinks_db.users as u2 where u2.id = d.UserId) owner_name FROM neat_drinks_db.drink_user_ratings As dur  INNER JOIN neat_drinks_db.users as t on dur.UserId = t.id  INNER JOIN neat_drinks_db.drinks as d on dur.DrinkId = d.id  where dur.DrinkId = ${req.params.id};`;
    db.sequelize
      .query(query, { type: db.sequelize.QueryTypes.SELECT })

      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  searchDrinks: function(req, res) {
    // console.log(req.params.q);
    query = "%" + req.params.q + "%";
    db.Drink.findAll({
      where: {
        dislpay_name: { [Op.like]: query }
      }
    })
      .then(dbDrink => res.json(dbDrink))
      .catch(err => res.status(422).json(err));
    console.log("you made it to the search section");
  }
};

// Requiring our models
var db = require("../models");

module.exports = {
  // GET route for getting a user

  findOneUser: function(req, res) {
    db.User.findOne({
      where: {
        id: 2
        // req.params.id
      }
    })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
    console.log("Hello you are in the find one User call");
  }
};
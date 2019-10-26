module.exports = function(sequelize, DataTypes) {
    const Drink_User_Rating = sequelize.define("Drink_User_Rating", {
        Rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Review: DataTypes.STRING,
    });

    return Drink_User_Rating;
  };
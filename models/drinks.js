module.exports = function(sequelize, DataTypes) {
  const Drink = sequelize.define("Drink", {
    dislpay_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredient_Detail: DataTypes.STRING,
    instruction: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    image: DataTypes.STRING
  });

  // A drink belongs to a single user...
  Drink.associate = function(models) {
    Drink.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Drink.belongsToMany(models.Ingredient, { through: "Drink_Ingredient" });
    Drink.belongsToMany(models.User, { through: "Drink_User_Rating" });
  };

  return Drink;
};

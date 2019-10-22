module.exports = function(sequelize, DataTypes) {
    const Drink = sequelize.define("Drink", {
        dislpay_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredient_Detail: DataTypes.STRING,
        instruction: DataTypes.TEXT,
        rating: DataTypes.INTEGER,
        image: DataTypes.STRING,
        last_modified_date: DataTypes.DATE,
    });
    
    // A drink belongs to a single user...
    Drink.associate = function(models) {
        Drink.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Drink.belongsToMany(models.Ingredient, {through: 'Drink_Ingredient'});
    };

    return Drink;
  };
module.exports = function(sequelize, DataTypes) {
    const Alcohol = sequelize.define("Alcohol", {
        display_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        active: {
            type: DataTypes.STRING,
            defaultValue: "Y",
        }
    });
    return Alcohol;
  };
module.exports = function(sequelize, DataTypes) {
    const Attribute = sequelize.define("Attribute", {
        display_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        active: {
            type: DataTypes.STRING,
            defaultValue: "Y"
        }
    });
    return Attribute;
  };
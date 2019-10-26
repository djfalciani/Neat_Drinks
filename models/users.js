module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            validate: {
                unique: true,
                allowNull: false,
                isEmail: true
            }
        },
        password: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        display_name: DataTypes.STRING,
        Website: DataTypes.STRING,
        tag_line: DataTypes.STRING,
    });

    User.associate = function(models) {
        User.belongsTo(models.UserType, {
            foreignKey: {
                allowNull: false
            }
        });

        User.belongsToMany(models.Drink, {through: 'Drink_User_Rating'});
    };

    return User;
  };
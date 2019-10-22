module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
              isEmail: true
            }
        },
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
    });

    User.associate = function(models) {
        User.belongsTo(models.UserType, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return User;
  };
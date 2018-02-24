module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a user_name of type STRING
    user_name: DataTypes.STRING
  });

  User.associate = function(models) {
    // Associating User with Pantry
    // When a User is deleted, also delete the associated Pantry
    User.hasMany(models.Pantry.item, {
      onDelete: "cascade"
    });
  };

  return User;
};

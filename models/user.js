module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the User model a user_name of type STRING
    user_name: DataTypes.STRING,
    password: DataTypes.STRING

  });

  Users.associate = function(models) {
    // Associating User with Pantry
    // When a User is deleted, also delete the associated Pantry
    Users.hasMany(models.Pantries, {
      onDelete: "cascade"
    });
  };
  //Users.sync();
  return Users;
};

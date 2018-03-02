//we like our passwords like we like our browns: hashed
const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {

  var Users = sequelize.define("Users", {
    // Giving the User model a user_name of type STRING
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Users.associate = function(models) {
    // Associating User with Pantry. When a User is deleted, also delete the associated Pantry
    Users.hasMany(models.Pantries, {
      onDelete: "cascade"
    });
  };
  Users.prototype.validPassword = function (password) {
    console.log('password: '+ password + 'hashedword' + this.password);
    return bcrypt.compareSync(password, this.password);
  };// end Users.prototype.validPassword

  Users.hook("beforeCreate", function (usr) {
    console.log('The  User.hook is running');
    usr.password = bcrypt.hashSync(usr.password, bcrypt.genSaltSync(10), null);
  });// end Users.hook

  return Users;
};





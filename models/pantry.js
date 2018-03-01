module.exports = function(sequelize, DataTypes) {
  var Pantries = sequelize.define("Pantries", {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Pantries.associate = function(models) {
    // We're saying that a Pantryt should belong to a User
    // A Pantry can't be created without a User due to the foreign key constraint
    Pantries.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Pantries;
};
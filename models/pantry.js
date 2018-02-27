module.exports = function(sequelize, DataTypes) {
  var Pantry = sequelize.define("Pantry", {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Pantry.associate = function(models) {
    // We're saying that a Pantryt should belong to a User
    // A Pantry can't be created without a User due to the foreign key constraint
    Pantry.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Pantry;
};
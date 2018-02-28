module.exports = function(sequelize, DataTypes) {
  var Pantry = sequelize.define("Pantry", {
    user_id: {
      type:DataTypes.INTEGER
    },
    item: {
      type: DataTypes.STRING
    }
  });

  // Pantry.associate = function(models) {
  //   // We're saying that a Pantryt should belong to a User
  //   // A Pantry can't be created without a User due to the foreign key constraint
  //   Pantry.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Pantry;
};
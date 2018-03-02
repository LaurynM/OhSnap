module.exports = function(sequelize, DataTypes) {
  var Pantries = sequelize.define("Pantries", {
    user_id: {
      type:DataTypes.INTEGER
    },
    item: {
      type: DataTypes.STRING
    }
  });

  // Pantries.associate = function(models) {
  //   // We're saying that a Pantryt should belong to a User
  //   // A Pantry can't be created without a User due to the foreign key constraint
  //   Pantries.belongsTo(models.Users, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Pantries;
};
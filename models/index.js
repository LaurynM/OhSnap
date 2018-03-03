'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

// var mysql = require('mysql');
// // var connection;
// if (process.env.JAWSDB_URL) {
//   db = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'Oh_Snap_db'
//   });
// };

if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL);
} else if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable],{define:{timestamp:false}});
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config, {define:{timestamp:false}});
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;

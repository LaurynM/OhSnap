const crypto = require('crypto');

const db = require("../models");
const passport = require("../helpers/passport.js");

module.exports = function(app) {
    app.get("/api/sign-in", function(req, res) {
    db.Users.findOne({
        where: {
          user_name: req.body.user_name,
          password: req.body.password
        }
      }).then(function(dbUser) {
          if (dbUser !== undefined) {
            return true;
          } else {
            return false;
          }
        res.json(dbUser);
      });
    });
  app.get("/api/users", function(req, res) {
    // 1. Add a join to include all of each Users' Pantry Items
    db.Users.findAll({include: [db.Pantries]}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // 2. Add a join to include all of the Users' Pantry Items here
    db.Users.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Pantries]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  app.post("/api/sign-in", passport.authenticate("local"), function(req, res) {
    res.json("/page2");
  });



};

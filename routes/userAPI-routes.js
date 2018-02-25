var db = require("../models");

module.exports = function(app) {
    app.get("/api/sign-in", function(req, res) {
    // 0. Verify a User's password
    db.User.findOne({
        where: {
          user_name: req.params.user_name,
          password: req.params.password
        }
      }).then(function(dbUser) {
        res.json(dbUser);
        return true;
      });
    });
  app.get("/api/users", function(req, res) {
    // 1. Add a join to include all of each Users' Pantry Items
    db.User.findAll({include: db.Pantry}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // 2. Add a join to include all of the Users' Pantry Items here
    db.User.findOne({
      include: db.Pantry,
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};

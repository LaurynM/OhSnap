// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the pantry items
  app.get("/api/pantry", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // 1. Add a join here to include all of the Users' pantries
    db.Pantry.findAll({
      include: db.User,
      where: query
    }).then(function(dbPantry) {
      res.json(dbPantry);
    });
  });

  // Get rotue for retrieving a single pantry item
  app.get("/api/pantry/:id", function(req, res) {
    // 2. Add a join here to include the User who added the pantry item
    db.Pantry.findOne({
      include: db.User,
      where: {
        id: req.params.id
      }
    }).then(function(dbPantry) {
      console.log(dbPantry);
      res.json(dbPantry);
    });
  });

  // POST route for saving a new pantry items
  app.post("/api/pantry", function(req, res) {
    db.Pantry.create(req.body).then(function(dbPantry) {
      res.json(dbPantry);
    });
  });

  // DELETE route for deleting pantry items
  app.delete("/api/pantry/:id", function(req, res) {
    db.Pantry.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPantry) {
      res.json(dbPantry);
    });
  });

  // PUT route for updating pantry item
  app.put("/api/posts", function(req, res) {
    db.Pantry.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPantry) {
        res.json(dbPantry);
      });
  });
};

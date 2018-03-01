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

  // GET route for getting all of the pantry items for the user
  app.get("/api/pantry/:userId?", function(req, res) {
    console.log(req.body)
    db.Pantry.findAll({
      where: {
        user_id: req.params.userId
      }
    }).then(function(dbPantry) {
      console.log(dbPantry);
      res.json(dbPantry);
    });
  });

  // Get rotue for retrieving a single pantry item
  app.get("/api/pantry/:id", function(req, res) {
    // 2. Add a join here to include the User who added the pantry item
    db.Pantry.findOne({
      include: db.User,
      where: {
        user_id: req.params.id
      }
    }).then(function(dbPantry) {
      console.log(dbPantry);
      res.json(dbPantry);
    });
  });

  // POST route for saving a new pantry items
  app.post("/api/pantry", function(req, res) {
    console.log("req");
    console.log(req.body);
    // console.log("res");
    // console.log(res);
    db.Pantry.create(req.body).then(function(dbPantry) {
      console.log(dbPantry);
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

var db = require("../models");

module.exports = function(app) {
    app.get("/api/sign-in/:user_name/:password", function(req, res) {
    // 0. Verify a User's password
    console.log('req.body');
    console.log(req.body);
    db.Users.findOne({
        where: {
          user_name: req.params.user_name,
          password: req.params.password
        }
      }).then(function(dbUser) {
          // if (dbUser !== undefined) {
          //   return true;
          // } else {
          //   return false;
          // }
          console.log('dbUser');
          console.log(dbUser);
          console.log('res.json(dbUser)');
          if(dbUser){
            console.log(dbUser.id);
            res.json(dbUser.id);
          }else{
            console.log(dbUser);
            res.json(dbUser);
          }
          
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
    console.log('post api users req.body')
    console.log(req.body)
    db.Users.create(req.body).then(function(dbUser) {
      console.log('post api users dbUser');
      console.log(dbUser);
      res.json(dbUser.id);
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

};

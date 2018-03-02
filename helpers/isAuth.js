//MIDDLEWARE HELPERS
//INPROG
//control what auth and unauth see
module.exports = function(req, res, next)  {
  if (req.user)   {
    //exits
      return next();
  }
  //if not a user, goes to index
  return res.redirect("/index.html");
};

//used by html-routes
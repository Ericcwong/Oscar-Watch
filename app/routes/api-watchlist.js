// // Dependencies
// // =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app) {
  app.get("/api/watchlist/userData", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //POST route for saving a new Watchlist
  app.post("/api/watchlist", function(req, res) {
    console.log(req.body);
    db.User.addWatchlist(db.Watchlist, { name: req.body.name }).then(function(
      result
    ) {
      res.json(result);
    });
  });

  // DELETE route for deleting Watchlists
  app.delete("/api/watchlist/:id", function(req, res) {
    db.Watchlist.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // PUT route for updating posts
  app.put("/api/watchlist", function(req, res) {
    db.Movies.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};

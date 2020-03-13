// // Dependencies
// // =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app) {
  app.get("/api/watchlist/userData", function(req, res) {
    db.User.findAll({
      where: parameters
    }).then(function(result) {
      res.json(result);
    });
  });
  // POST route for saving a new Watchlist
  app
    .post("/api/watchlist", function(req) {
      console.log(req.body);
      //db.Watchlist Code
    })
    .then(function(result) {
      res.json(result);
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

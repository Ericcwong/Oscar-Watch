// // Dependencies
// // =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================

module.exports = function(app) {
  //GET Route to get User Email and ID for Display
  app.get("/api/watchlist/userData", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //Route to get all Watchlists that a user has created(populate page with this call)
  app.get("/api/watchlist/", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      db.Watchlist.findAll({
        where: { UserId: req.user.id }
      }).then(function(result) {
        res.json(result);
        console.log(result);
      });
    }
  });

  //Route to get the contents of a particular watchlist name(use to populate watchlist cards)
  app.get("/api/watchlist/:name", function(req, res) {
    db.Watchlist.findAll({
      attributes: "movies",
      where: { name: req.params.name, UserId: req.user.id }
    }).then(function(result) {
      res.json(result);
      console.log(result);
    });
  });

  //POST route for saving a new Watchlist (use to create a new blank watchlist)
  app.post("/api/watchlist", function(req, res) {
    console.log(req.body);
    db.Watchlist.create({
      name: req.body.name,
      UserId: req.user.id,
      movies: {}
    })
      .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        console.log(err, req.body.name);
      });
  });

  // DELETE route for deleting Watchlists
  app.delete("/api/watchlist/:name", function(req, res) {
    db.Watchlist.destroy({
      where: {
        name: req.params.name,
        UserId: req.user.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // PUT route for adding movies to Watchlist
  app.put("/api/watchlist/:name", function(req, res) {
    db.Watchlist.update(
      { movies: req.body.movies, name: req.body.name },
      { returning: true, where: { name: req.params.name, UserId: req.user.id } }
    ).then(function(result) {
      res.json(result);
    });
  });
};

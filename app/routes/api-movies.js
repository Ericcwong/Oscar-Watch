// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the movies
  // app.get("/api/movies/", function(req, res) {
  //   db.Movie.findAll({}).then(function(result) {
  //     res.json(result);
  //   });
  // });

  // // Get route for returning awards of a specific category
  // app.get("/api/movies/category/:category", function(req, res) {
  //   db.Movie.findAll({
  //     where: {
  //       catagories: req.params.category
  //     }
  //   }).then(function(result) {
  //     res.json(result);
  //   });
  // });

  // // Get route for returning a specific Movie
  // app.get("/api/movies/:movie", function(req, res) {
  //   db.Movie.findAll({
  //     where: {
  //       movieName: req.params.movie
  //     }
  //   }).then(function(result) {
  //     res.json(result);
  //   });
  // });

  // // Get route for returning winners of a specific name
  // app.get("/api/movies/name/:name", function(req, res) {
  //   db.Movie.findAll({
  //     where: {
  //       name: req.params.name
  //     }
  //   }).then(function(result) {
  //     res.json(result);
  //   });
  // });

  // Get route for returning winners of a specific year
  // app.get("/api/movies/year/:year", function(req, res) {
  //   db.Movie.findAll({
  //     where: {
  //       awardYear: req.params.year
  //     }
  //   }).then(function(result) {
  //     res.json(result);
  //   });
  // });
  // // Get route for returning winners for all variables
  app.get("/api/movies/search", function(req, res) {
    console.log("test 1");
    let parameters = {};
    if (req.query.filmYear){
      parameters.filmYear = req.query.filmYear;
    }
    if (req.query.catagories){
      parameters.catagories = req.query.catagories;
    }
    if (req.query.name){
      parameters.name = req.query.name;
    }
    if (req.query.movieName){
      parameters.movieName = req.query.movieName;
    }
    if (req.query.isWinner){
      parameters.isWinner = req.query.isWinner;
    }
    db.Movie.findAll({
      where: parameters
    }).then(function(result) {
      res.json(result);
    });
  });
  // POST route for saving a new Movie
  app.post("/api/movies", function(req, res) {
    console.log(req.body);
    db.Movies.create({
      filmYear: req.body.filmYear,
      awardYear: req.body.awardYear,
      ceremony: req.body.ceremony,
      catagories: req.body.body,
      name: req.body.category,
      movieName: req.body.title,
      isWinner: req.body.isWinner
    }).then(function(result) {
      res.json(result);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/movies/:id", function(req, res) {
    db.Movies.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Movies.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};

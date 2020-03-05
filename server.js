// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
<<<<<<< HEAD

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");
=======
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./app/config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./app/models");
>>>>>>> 4db5194b27314802a2e2a3acc358d4992a04eb7f

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

<<<<<<< HEAD
// Routes
// =============================================================


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
=======
// Requiring our routes
require("./app/routes/html-routes.js")(app);
require("./app/routes/api-movies")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(function() {
>>>>>>> 4db5194b27314802a2e2a3acc358d4992a04eb7f
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

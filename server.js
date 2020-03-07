// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./app/config/passport");
//const path = require("path");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./app/models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< HEAD
app.use(express.static(__dirname + "/public"));
=======
app.use(express.static("app/public"));
>>>>>>> ff7ce48c44e6628d65c9df67a5dec17383ca8ec8
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "Laughing vanilla", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
<<<<<<< HEAD
require("./app/routes/html-routes")(app);
require("./app/routes/api-movies")(app);
=======
require("./app/routes/html-routes.js")(app);
require("./app/routes/api-movies.js")(app);
require("./app/routes/api-users.js")(app);
require("./app/routes/api-watchlist.js")(app);
>>>>>>> ff7ce48c44e6628d65c9df67a5dec17383ca8ec8

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
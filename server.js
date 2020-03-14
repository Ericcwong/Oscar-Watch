// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./app/models");
var passport = require("passport");
require("./app/config/passport.js");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));
// We need to use sessions to keep track of our user's login status

app.use(
  session({
    secret: "Laughing vanilla",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./app/routes/auth.js")(app, passport);
//require("./app/routes/html-routes.js")(app);
require("./app/routes/api-movies.js")(app);
//require("./app/routes/api-users.js")(app);
require("./app/routes/api-watchlist.js")(app);

//load passport strategies
require("./app/config/passport.js")(passport, db.user);

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

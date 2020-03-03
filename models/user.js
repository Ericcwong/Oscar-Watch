// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Movie" model that matches up with DB
var User = sequelize.define("character", {
  // the routeName gets saved as a string
  userName: Sequelize.STRING,
  // the name of the movieYear (a Date)
  password: Sequelize.STRING
  
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
Character.sync();

// Makes the Movie Model available for other files (will also create a table)
module.exports = User;

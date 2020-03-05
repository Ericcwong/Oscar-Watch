// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Watchlist" model that matches up with DB
var Watchlist = sequelize.define("character", {
  //sequelize will create the id, movie_id, and user_id
  // the routeName gets saved as a string
  movieId: Sequelize.INTEGER,
  userId: Sequelize.INTEGER,
  isWatched: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

// Syncs with DB
Character.sync();

// Makes the Movie Model available for other files (will also create a table)
module.exports = Watchlist;

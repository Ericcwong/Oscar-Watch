module.exports = function(sequelize, DataType) {
  var Watchlist = sequelize.define("Watchlist", {
    name: DataType.STRING
  });
  return Watchlist;
};

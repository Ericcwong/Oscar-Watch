module.exports = function(sequelize, DataType) {
  var Watchlist = sequelize.define("Watchlist", {
    name: DataType.STRING,
    movies: {
      type: DataType.STRING,
      get() {
        return JSON.parse(this.getDataValue("movies"));
      },
      set(val) {
        this.setDataValue("movies", JSON.stringify(val));
      }
    }
  });

  Watchlist.associate = models => {
    Watchlist.belongsTo(models.User);
  };
  return Watchlist;
};

module.exports = function(sequelize, DataType) {
  var Movie = sequelize.define(
    "Movie",
    {
      filmYear: DataType.INTEGER,
      awardYear: DataType.INTEGER,
      ceremony: DataType.INTEGER,
      catagories: DataType.STRING,
      name: DataType.STRING,
      movieName: DataType.STRING,
      isWinner: DataType.BOOLEAN
    },
    { timestamps: false }
  );

  return Movie;
};

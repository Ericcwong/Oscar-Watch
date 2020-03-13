module.exports = function(sequelize, Sequelize) {
  let User = sequelize.define("User", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  User.associate = models => {
    console.log(models.Watchlist);
    User.belongsToMany(models.Movie, {
      through: models.Watchlist
    });
  };

  return User;
};

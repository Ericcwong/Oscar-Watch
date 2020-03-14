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
    User.hasMany(models.Watchlist, {});
  };

  return User;
};

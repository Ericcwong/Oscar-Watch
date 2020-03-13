module.exports = {
  "development": {
    "username": process.env.mySQL_username,
    "password": process.env.mySQL_password,
    "database": "Oscar_watch_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 1
  },
  "test": {
    "username": process.env.mySQL_username,
    "password": process.env.mySQL_password,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "username": process.env.mySQL_username,
    "password": process.env.mySQL_password,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
};

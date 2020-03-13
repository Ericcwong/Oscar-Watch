var exports = (module.exports = {});
var path = require("path");

exports.signup = function(req, res) {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
};

exports.signin = function(req, res) {
  res.sendFile(path.join(__dirname, "../public/login.html"));
};

exports.members = function(req, res) {
  res.sendFile(path.join(__dirname, "../public/members.html"));
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};

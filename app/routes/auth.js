var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect("/login");
  }

  app.get("/signup", authController.signup);

  app.post(
    "/login",
    passport.authenticate("local-signin", {
      successRedirect: "/members",

      failureRedirect: "/signin"
    })
  );

  app.get("/login", authController.signin);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/members",

      failureRedirect: "/signup"
    })
  );
  app.get("/members", isLoggedIn, authController.members);

  app.get("/logout", authController.logout);
};

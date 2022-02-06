



module.exports = (app) => {
    const users = require("../controllers/user.controller");
    var router = require("express").Router();
  
    router.post("/login", users.login);
  
    router.post("/signup", users.signUp);
  
    router.post("/logout", users.logout);
  
    app.use("/api", router);
  };
  
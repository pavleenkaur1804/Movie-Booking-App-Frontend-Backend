module.exports = (app) => {
    const genres = require("../controllers/genre.controller");
    
  
    var router = require("express").Router();
  
    //Retrieve  All Artists
    router.get("/genres", genres.findAllGenres);
  
    
    
   
    app.use("/api", router);
  };
  
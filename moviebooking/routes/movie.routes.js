const auth=require('../controllers/auth');


module.exports = (app) => {
    const movies = require("../controllers/movie.controller");
    var router = require("express").Router();
   
   //Retrieve all Movies
    router.get("/movies", movies.findAllMovies);
  
   
  
    //Retrieve movies by ID
    router.get("/movies/:movieId",movies.findOne);

    app.use("/api", router);
  };
  
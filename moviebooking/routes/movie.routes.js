module.exports = (app) => {
   
    var router = require("express").Router();
  
    //Retrieve  All Movies
    router.get("/movies", (req,res)=>{
        res.send("All Movies Data in JSON format from Mongo DB")
    });
  
    
    
   
    app.use("/", router);
  };
  
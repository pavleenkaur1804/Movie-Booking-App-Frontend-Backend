module.exports = (app) => {
   
    var router = require("express").Router();
  
    //Retrieve  All Artists
    router.get("/genres", (req,res)=>{
        res.send("All Genres Data in JSON format from Mongo DB")
    });
  
    
    
   
    app.use("/", router);
  };
  
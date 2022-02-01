module.exports = (app) => {
   
    var router = require("express").Router();
  
    //Retrieve  All Artists
    router.get("/artists", (req,res)=>{
      res.send("All artists Data in JSON format from Mongo DB")
    });
  
    
    
   
    app.use("/", router);
  };
  
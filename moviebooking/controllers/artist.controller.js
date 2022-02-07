const db = require("../models");
const Artist = db.artist;





exports.findAllArtists = (req, res) => {
    Artist.find({}).then((data) => {
      res
        .status(200)
        .send({
          artists: data,
          message: "artists fetch successfully.",
        })
       
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while fetching the artists.",
      });
    });
  };
const db = require("../models");
const Genre= db.genre;



exports.findAllGenres = (req, res) => {
    Genre.find({}).then((data) => {
      res
        .status(200)
        .send({
          genres: data,
          message: "genres fetch successfully.",
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occured while fetching the genres.",
          });
        });
    });
  };
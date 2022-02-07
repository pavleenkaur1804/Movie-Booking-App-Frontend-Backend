const db = require("../models");
const Movie = db.movie;




exports.findAllMovies = (req, res) => {
  // GET /movies
  console.log("received request")
  if (req.query.status!=='Published' || req.query.status!=='Released') {

    Movie.find({}).then((data) => {
      res.send({movies:data})
      console.log(data)
        }) .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occured while fetching the movies.",
          });
    });
  }
  // GET /movies?status=PUBLISHED 
  else if (req.query.status == 'Published') {
    Movie.find({ published: true })
      .then((data) => {
        res.send({movies:JSON.stringify(data)})
        console.log("GET /movies?status=PUBLISHED ",data)
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occured while fetching the movie.",
        });
      });
}
// GET /movies?status=RELEASED
  else if (req.query.status == 'Released') {
    Movie.find({ released: true })
      .then((data) => {
       res.send({movies:JSON.stringify(data)})
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occured while fetching the movie.",
        });
      });
  }
// GET /movies?status=RELEASED&title={title}&genres={genres}&artists={artists}&start_date={startdate}&end_date={enddate}

  else {
    Movie.find(
      {
        $or: [{
          $and: [
            { released: true },
            { title: req.query.title },
            { genres: req.query.genres || null},
            { "artists.first_name": req.query.artists || null},
            { release_date: req.query.start_date || null},
            { publish_date: req.query.end_date || null}]
        },
        {
          $and: [
            { released: true },
            { title: req.query.title },
            { genres: req.query.genres || null},
            { "artists.last_name": req.query.artists|| null },
            { release_date: req.query.start_date|| null },
            { publish_date: req.query.end_date || null}]
        }]

      }

    )
      .then((data) => {
        res.send(JSON.stringify(data))
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occured while fetching the movie.",
        });
      });
  }
};
//Finding a movie by its ID
// GET /movies/{movieId}
exports.findOne = (req, res) => {
  
  Movie.find({"movieid":req.params.movieId})
    .then((data) => {
     res.json(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while fetching the movie.",
      });
    });
};

exports.findShows = (req, res) => {
  const id = req.params.movieId;

  Movie.findById(id)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while fetching the show.",
      });
    });
};



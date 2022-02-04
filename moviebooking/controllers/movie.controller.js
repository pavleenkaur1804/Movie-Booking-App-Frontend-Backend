const db = require("../models");
const Movie = db.movie;




exports.findAllMovies = (req, res) => {
  // GET /movies
  if (req.query.status!=='Published' || req.query.status!=='Released') {

    Movie.find({}).then((data) => {
      res
        .status(200)
        .send({
          movies: data,
          message: "Movies fetch successfully.",
        }).catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occured while fetching the movies.",
          });
        });
    });
  }
  // GET /movies?status=PUBLISHED 
  else if (req.query.status == 'Published') {
    Movie.find({ published: true })
      .then((data) => {
        res.status(200).send({
          movies: data,
          message: "Movie fetch successfully.",
        });
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
        res.status(200).send({
          movies: data,
          message: "Movie fetch successfully.",
        });
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
            { genres: req.query.genres },
            { "artists.first_name": req.query.artists },
            { release_date: req.query.start_date },
            { publish_date: req.query.end_date }]
        },
        {
          $and: [
            { released: true },
            { title: req.query.title },
            { genres: req.query.genres },
            { "artists.last_name": req.query.artists },
            { release_date: req.query.start_date },
            { publish_date: req.query.end_date }]
        }]

      }

    )
      .then((data) => {
        res.status(200).send({
          movies: data,
          message: "Movie fetch successfully.",
        });
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
      res.status(200).send({
        movie: data,
        message: "Movie fetch successfully.",
      });
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
      res.status(200).send({
        shows: data.shows,
        message: "Shows fetch successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while fetching the show.",
      });
    });
};



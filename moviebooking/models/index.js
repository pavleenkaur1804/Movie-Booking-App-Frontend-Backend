const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model")(mongoose);
db.genre = require("./genre.model")(mongoose);
db.movie = require("./movie.model")(mongoose);
db.artist=require("./artist.model")(mongoose);

module.exports = db;
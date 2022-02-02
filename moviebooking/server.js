const express = require("express");
bodyParser = require("body-parser");
const db = require("./models");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

//Importing routes from specific route files
require("./routes/movie.routes")(app);

require("./routes/artist.routes")(app);

require("./routes/genre.routes")(app);
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
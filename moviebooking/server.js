const express = require("express");
bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

//Importing routes from specific route files
require("./routes/movie.routes")(app);

require("./routes/artist.routes")(app);

require("./routes/genre.routes")(app);
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
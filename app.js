const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
require('dotenv').config();
console.log(process.env)

app.set("view engine", "ejs");

// This line allows express to parse the form data
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App started - listening on port ${PORT}!`);
});
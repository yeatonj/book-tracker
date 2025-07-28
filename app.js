const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const booksRouter = require("./routes/booksRouter");
const authorsRouter = require("./routes/authorsRouter");
const usersRouter = require("./routes/usersRouter");
require('dotenv').config();

app.set("view engine", "ejs");

// This line allows express to parse the form data
app.use(express.urlencoded({ extended: true }));


app.use("/users", usersRouter);
app.use("/authors", authorsRouter);
app.use("/books", booksRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App started - listening on port ${PORT}!`);
});
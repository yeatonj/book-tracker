const { Router } = require("express");
const booksController = require("../controllers/booksController");
const booksRouter = Router();

booksRouter.get("/", booksController.booksGet);
booksRouter.get("/:bookId", booksController.bookGet);

module.exports = booksRouter;
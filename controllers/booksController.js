const { getAllBooks } = require("../db/queries");
const { all } = require("../routes/indexRouter");

require("../db/queries");

async function booksGet(req, res) {
    const allBooks = await getAllBooks();
    res.render("books", {
        title: "Book List",
        books: allBooks,
    });
}

module.exports = {
    booksGet
}
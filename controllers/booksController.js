const { getAllBooks, getBook } = require("../db/queries");
const { all } = require("../routes/indexRouter");

require("../db/queries");

async function booksGet(req, res) {
    const allBooks = await getAllBooks();
    res.render("books", {
        title: "Book List",
        books: allBooks,
    });
}

async function bookGet(req, res) {
    const { bookId } = req.params;
    const bookData = await getBook(bookId);
    if (bookData.length > 0) {
        res.render("book", {
            title: "Book Data",
            book: bookData[0],
        });
    } else {
        res.render("errors/not-found", {
            title: "Not Found",
            errMsg: "No book found to match this ID.",
            backPath: "/books"
        });
    }
}

module.exports = {
    booksGet,
    bookGet
}
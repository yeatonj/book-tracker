async function booksGet(req, res) {
    res.render("books", {
        title: "Book List"
    });
}

module.exports = {
    booksGet
}
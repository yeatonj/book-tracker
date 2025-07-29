const { getAllAuthors, getAuthorBooks, getAuthorName } = require("../db/queries");


async function authorsGet(req, res) {
    const allAuthors = await getAllAuthors();
    res.render("authors", {
        title: "Author List",
        authors: allAuthors
    });
}

async function authorGet(req, res) {
    const { authorId } = req.params;
    const authName = await getAuthorName(authorId);
    const authBooks = await getAuthorBooks(authorId);
    res.render("author", {
        title: "Author Books",
        name: authName[0].name,
        books: authBooks,
    });
}

module.exports = {
    authorsGet,
    authorGet
}
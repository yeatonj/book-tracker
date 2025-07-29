const { getAllAuthors, getAuthorBooks, getAuthorName, addUser, addAuthor } = require("../db/queries");


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
    if (authName.length > 0) {
        res.render("author", {
            title: "Author Books",
            name: authName[0].name,
            books: authBooks,
        });
    } else {
        res.render("errors/not-found", {
            title: "Not Found",
            errMsg: "No author found to match this ID.",
            backPath: "/authors"
        });
    }
    
}

async function authorsPost(req, res) {
    await addAuthor(req.body.newAuthor);
    res.redirect("/authors");
}

module.exports = {
    authorsGet,
    authorGet,
    authorsPost
}
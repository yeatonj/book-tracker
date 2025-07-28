async function authorsGet(req, res) {
    res.render("authors", {
        title: "Author List"
    });
}

module.exports = {
    authorsGet
}
async function indexGet(req, res) {
    res.render("index", {
        title: "User list"
    });
}

module.exports = {
    indexGet
}
async function usersGet(req, res) {
    res.render("users", {
        title: "User List"
    });
}

module.exports = {
    usersGet
}
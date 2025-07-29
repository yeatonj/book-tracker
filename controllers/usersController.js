const { getAllUsers, getUserBooks } = require("../db/queries");

async function usersGet(req, res) {
    const allUsers = await getAllUsers();
    res.render("users", {
        title: "User List",
        users: allUsers,
    });
}

module.exports = {
    usersGet
}
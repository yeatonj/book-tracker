const { getAllUsers, getUserBooks, getUserName } = require("../db/queries");

async function usersGet(req, res) {
    const allUsers = await getAllUsers();
    res.render("users", {
        title: "User List",
        users: allUsers,
    });
}

async function userGet(req, res) {
    const { userId } = req.params;
    const userName = await getUserName(userId);
    const userData = await getUserBooks(userId);
    res.render("user", {
        title: "User Data",
        name: userName[0].name,
        books: userData,
    });
}



module.exports = {
    usersGet,
    userGet
}
const { getAllUsers, getUserBooks, getUserName, addUser } = require("../db/queries");

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
    if (userName.length > 0) {
        res.render("user", {
            title: "User Data",
            name: userName[0].name,
            books: userData,
        });
    }
    else {
        res.render("errors/not-found", {
            title: "Not Found",
            errMsg: "No user found to match this ID.",
            backPath: "/users"
        });
    }
}

async function usersPost(req, res) {
    await addUser(req.body.newUser);
    res.redirect("/users");
}



module.exports = {
    usersGet,
    userGet,
    usersPost
}
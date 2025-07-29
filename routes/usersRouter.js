const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.usersGet);
usersRouter.get("/:userId", usersController.userGet);

module.exports = usersRouter;
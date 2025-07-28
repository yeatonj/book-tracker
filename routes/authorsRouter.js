const { Router } = require("express");
const authorsController = require("../controllers/authorsController");
const authorsRouter = Router();

authorsRouter.get("/", authorsController.authorsGet);

module.exports = authorsRouter;
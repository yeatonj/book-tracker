const { Router } = require("express");
const authorsController = require("../controllers/authorsController");
const authorsRouter = Router();

authorsRouter.get("/", authorsController.authorsGet);
authorsRouter.get("/:authorId", authorsController.authorGet);

module.exports = authorsRouter;
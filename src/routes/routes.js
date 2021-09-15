const express = require("express");
const router = express.Router();

const TeamController = require("../controllers/TeamController");
const TeamMiddleware = require("../middlewares/TeamsMiddlewares");

router.get("/teams", TeamController.getAll);
router.get("/teams/:id", TeamMiddleware.validateId, TeamController.getById);
router.post("/teams", TeamController.create);
router.put("/teams/:id", TeamMiddleware.validateId, TeamController.update);
router.delete("/teams/:id", TeamMiddleware.validateId, TeamController.del);
router.get("/filterByName", TeamController.filterByName);
router.get("/filterByCountry", TeamController.filterByCountry);
router.get("/filterByLeague", TeamController.filterByLeague);
router.get("/filterAll", TeamController.filterAll);

module.exports = router;
const router = require("express").Router();
const repoRoutes = require("./repo");

// Book routes
router.use("/repo", repoRoutes);

module.exports = router;
const router = require("express").Router();
const bookRoutes = require("./repo");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
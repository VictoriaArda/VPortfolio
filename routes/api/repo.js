const router = require("express").Router();
const repoController = require("../../controllers/repoController");


router.route("/")
  .get(repoController.findAll)
  .post(repoController.create);


router
  .route("/:id")
  .get(repoController.findById)
  .put(repoController.update)
  .delete(repoController.remove);

module.exports = router;
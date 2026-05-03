const router = require("express").Router();  // permite a criação de rotas e a modularização

const {
  listTasks,
  createTask
} = require("../controllers/tasks.controller");

router.get("/", listTasks);
router.post("/create", createTask);

module.exports = router;
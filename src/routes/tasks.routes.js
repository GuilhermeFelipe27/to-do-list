const router = require("express").Router();  // permite a criação de rotas e a modularização

const {
  listTasks,
} = require("../controllers/tasks.controller");

router.get("/", listTasks);

module.exports = router;
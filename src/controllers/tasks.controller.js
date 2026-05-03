//CONTROLLER É O MÉTODO DA ROTA

const tasks = require("../data/mock");

// LISTAR TAREFAS
const listTasks = async (req, res) => {
  return res.render("index");
};



module.exports = { listTasks };
 
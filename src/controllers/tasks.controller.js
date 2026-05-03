//CONTROLLER É O MÉTODO DA ROTA

// const tasks = require("../data/mock");
const Task = require("../models/Task");

// LISTAR TAREFAS
const listTasks = async (req, res) => {
  return res.render("index");
};

// CRIAR TAREFAS
const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.redirect("/"); // redireciona para listTasks
  }

  try {
    await Task.create(task); // aqui, Task está recebendo as funções do mongoose de "models/Task.js". O .create aqui é da biblioteca de mongoose
    return res.redirect("/");
  } catch (err) {
    return res.status(500).send({
      error: err.message,
    });
  }
};

module.exports = { listTasks, createTask };

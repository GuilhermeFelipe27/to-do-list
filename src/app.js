const express = require("express");
const app = express();

const listTasks = require("./routes/tasks.routes");

app.use(express.json());

app.use("/teste", listTasks);

module.exports = app;

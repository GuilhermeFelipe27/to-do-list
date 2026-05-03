const express = require("express"); // express:  simplifica a criação de rotas, recebimento de dados e o envio e recebimento de respostas
const path = require("path"); // responsável por direcionar as pastas. Usado em sistemas MVC
const tasksRoutes = require("./routes/tasks.routes");

const app = express(); // atribuímos os métodos do express a const app. agora pode-se usar os metodos .listen, get, post, etc
// * quando colocamos parênteses em express, ele está sendo executado, executamos a função de express dentro de app

app.set("view engine", "ejs"); // precisa ser executada antes de qualquer rota
// app.use serve para instalar middlewares
app.use(express.json()); // necessário para que a API leia json
app.use(express.static(path.join(__dirname, "public"))); // usado em sistemas MVC

app.use(tasksRoutes); 

module.exports = app;
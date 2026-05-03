const app = require("./src/app"); // importa o app já com os métodos do express.
const path = require("path"); // responsável por direcionar as pastas

const PORT = 3333;

app.listen(PORT, () =>
  console.log(`API rodando em http://localhost:${PORT}`),
);

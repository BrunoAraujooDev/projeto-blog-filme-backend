// Importações
const express = require('express');
const cors = require('cors');

// Configuração da porta
const port = 3001;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Chamo o arquivo de rotas
const router = require('./routers/index');
router(app);

app.listen(port, () => {
  console.log(
    `O Servidor está rodando na porta: ${port} \nEndereço: http://localhost:${port}`
  );
});
module.exports = app;

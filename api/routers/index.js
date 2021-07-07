const { Router } = require('express');
const { name, version } = require('../../package.json');

const routesV1Categoria = require('./v1/categorias');
const routesV1Post = require('./v1/postagem');

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.send({ name, version });
  });

  const routesV1 = Router();

  routesV1Categoria(routesV1);
  routesV1Post(routesV1);

  app.use('/v1', routesV1);
};

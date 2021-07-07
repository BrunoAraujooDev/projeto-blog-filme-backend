const postagemController = require('../../controllers/controllers.postagem');

module.exports = (router) => {
  router.route('/postagem').post(postagemController.criarPostagens);
  router.route('/postagem').get(postagemController.listarPostagens);
  router.route('/postagem/:id').get(postagemController.listarPostagensPorId);
  router.route('/postagem/:id').put(postagemController.updatePostagens);
  router.route('/postagem/:id').delete(postagemController.excluirPostagensPorId);
  router.route('/postagem/categoria/:id').get(postagemController.listarPostagensPorCategoria);
};

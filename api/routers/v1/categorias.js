const categoriaController = require('../../controllers/controllers.categoria');

module.exports = (router) => {
    router.route('/categoria').post(categoriaController.criarCategorias);
    router.route('/categoria').get(categoriaController.listarCategorias);
    router.route('/categoria/:id').get(categoriaController.listarCategoriasPorId);
    router.route('/categoria/:id').put(categoriaController.updateCategorias);
    router.route('/categoria/:id').delete(categoriaController.excluirCategoriasPorId);
}



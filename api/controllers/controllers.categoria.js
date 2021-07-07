const uuid = require('uuid').v4;
const { saveFile, openFile } = require('../utils/utils');
const categoriasDB = 'categorias';

// Listar todas as categorias
const listarCategorias = async (req, res, next) => {
  var categorias = await openFile(categoriasDB);
  res
    .status(200)
    .send({ categorias, message: `As categorias foram listadas com sucesso` });
};

// Listar a categoria pelo ID
const listarCategoriasPorId = async (req, res, next) => {
  const id = req.params.id;
  var categorias = await openFile(categoriasDB);

  const result = await categorias.find((cat) => cat.id == id);

  if (!result) {
    res.status(409).send({
      error: true,
      message: 'id não encontrado.'
    });
  } else {
    res.status(200).send({
      result,
      message: `A categoria com id: ${id} foi listada com sucesso`
    });
  }
};

// Inserir no BD uma categoria
const criarCategorias = async (req, res, next) => {
  var categorias = await openFile(categoriasDB);
  const body = req.body;

  const result = {
    id: uuid(),
    descricao: body.descricao
  };
  if (!body.descricao) {
    res
      .status(400)
      .send({ error: true, message: `Você deve preencher todos os campos` });
    return -1;
  }
  
  const verificaId = await categorias.find((cat) => cat.id == body.id);

  // Verifica se o ID já existe na base de dados
  if (verificaId) {
    res.status(409).send({ error: true, message: `ID já existe` });
  } else {
    // Sucesso, insere os dados na base
    await categorias.push(result);
    await saveFile(categoriasDB, categorias);
    res.status(200).send({ message: `A categoria foi criada com sucesso.` });
  }
};

// Excluir no BD uma categoria
const excluirCategoriasPorId = async (req, res, next) => {
  var categorias = await openFile(categoriasDB);
  const id = req.params.id;
  const result = categorias.findIndex((cat) => cat.id == id);
  const verificar = categorias.find((cat) => cat.id == id);

  if (!verificar) {
    res.status(409).send({
      error: true,
      message: 'id não encontrado.'
    });
  } else {
    // index do array que eu quero mudar e a qtd de objetos
    const resp = await categorias.splice(result, 1);
    await saveFile(categoriasDB, categorias);
    res.status(200).send({
      message: `A categoria com id: ${id} foi excluida com sucesso`
    });
  }
};

// Atualizar no BD uma categoria
const updateCategorias = async (req, res, next) => {
  var categorias = await openFile(categoriasDB);
  try {
    const id = req.params.id;
    const result = categorias.findIndex((cat) => cat.id == id);
    const verificar = categorias.find((cat) => cat.id == id);

    if (!verificar) {
      res.status(409).send({
        error: true,
        message: 'id não encontrado.'
      });
    } else {
      // pega o objeto que eu quero alterar
      categorias[result] = { ...categorias[result], ...req.body };
      await saveFile(categoriasDB, categorias);

      var categorias = await openFile(categoriasDB);

      const lista = await categorias.find((cat) => cat.id == id);
      return res.status(200).send({
        message: `A categoria com id: ${id} foi atualizada com sucesso.`
      });
    }
  } catch (error) {
    return res.status(500).send({
      error: true,
      message: 'Internal server error!'
    });
  }
};

module.exports = {
  criarCategorias,
  listarCategorias,
  listarCategoriasPorId,
  excluirCategoriasPorId,
  updateCategorias
};

const uuid = require('uuid').v4;
const { saveFile, openFile } = require('../utils/utils');
const postagensDB = 'postagens';

// Listar todas as postagens
const listarPostagens = async (req, res, next) => {
  var postagens = await openFile(postagensDB);
  res
    .status(200)
    .send({ postagens, message: `As postagens foram listadas com sucesso` });
};

// Listar a postagem pelo ID
const listarPostagensPorId = async (req, res, next) => {
  const id = req.params.id;
  var postagens = await openFile(postagensDB);

  const result = await postagens.find((cat) => cat.id == id);

  if (!result) {
    res.status(409).send({
      error: true,
      message: 'id não encontrado.'
    });
  } else {
    res.status(200).send({
      result,
      message: `A postagens com id: ${id} foi listada com sucesso`
    });
  }
};

//  Listar postagens por categoria
const listarPostagensPorCategoria = async (req, res, next) => {
  const idCat = req.params.id;

  var postagens = await openFile(postagensDB);

  const listaPostagem = postagens.filter((item) => item.idCategoria == idCat);
  const verificaPostagens = postagens.find((item) => item.idCategoria == idCat);

  if (!verificaPostagens) {
    res.status(409).send({
      error: true,
      message: 'Não existe postagens com o ID informado'
    });
    return -1;
  }

  res
    .status(200)
    .send({ listaPostagem, message: 'Postagens listadas com sucesso' });
  return 0;
};

// Inserir no BD uma postagem
const criarPostagens = async (req, res, next) => {
  var postagens = await openFile(postagensDB);
  const body = req.body;
  const result = {
    id: uuid(),
    idCategoria: body.idCategoria,
    titulo: body.titulo,
    imagem: body.imagem,
    dataPostagem: body.dataPostagem,
    sinopse: body.sinopse,
    atoresPrincipais: body.atoresPrincipais,
    diretor: body.diretor,
    lancamento: body.lancamento,
    descricao: body.descricao,
    nota: body.nota,
    imagemCarousel: body.imagemCarousel
  };
  if (
    !body.idCategoria ||
    !body.titulo ||
    !body.imagem ||
    !body.dataPostagem ||
    !body.sinopse ||
    !body.atoresPrincipais ||
    !body.diretor ||
    !body.lancamento ||
    !body.descricao ||
    !body.nota ||
    !body.imagemCarousel
  ) {
    res
      .status(400)
      .send({ error: true, message: `Você deve preencher todos os campos` });
    return -1;
  }

  const verificaId = await postagens.find((cat) => cat.id == body.id);
  const verificaTitulo = await postagens.find((v) => v.titulo == body.titulo);

  // Verifica se o ID já existe na base de dados
  if (verificaId) {
    res.status(409).send({ message: `ID já existe na base de dados` });
  } else if (verificaTitulo) {
    // Verifica se o Titulo já existe na base de dados
    res.status(409).send({
      error: true,
      message: `Titulo já existe já existe na base de dados`
    });
  } else {
    // Sucesso, insere os dados na base
    await postagens.push(result);
    await saveFile(postagensDB, postagens);
    res.status(200).send({ message: `A postagem foi criada com sucesso.` });
  }
};

// Excluir no BD uma postagem
const excluirPostagensPorId = async (req, res, next) => {
  var postagens = await openFile(postagensDB);
  const id = req.params.id;
  const result = postagens.findIndex((cat) => cat.id == id);
  const verificar = postagens.find((cat) => cat.id == id);

  if (!verificar) {
    res.status(409).send({
      error: true,
      message: 'id não encontrado.'
    });
  } else {
    // index do array que eu quero mudar e a qtd de objetos
    const resp = await postagens.splice(result, 1);
    await saveFile(postagensDB, postagens);
    res.status(200).send({
      message: `A postagem com id: ${id} foi excluida com sucesso`
    });
  }
};

// Atualizar no BD uma postagem
const updatePostagens = async (req, res, next) => {
  var postagens = await openFile(postagensDB);
  try {
    const id = req.params.id;
    const result = postagens.findIndex((cat) => cat.id == id);
    const verificar = postagens.find((cat) => cat.id == id);

    if (!verificar) {
      res.status(409).send({
        error: true,
        message: 'id não encontrado.'
      });
    } else {
      // pega o objeto que eu quero alterar
      postagens[result] = { ...postagens[result], ...req.body };
      await saveFile(postagensDB, postagens);

      var postagens = await openFile(postagensDB);

      const lista = await postagens.find((cat) => cat.id == id);
      return res.status(200).send({
        message: `A postagem com id: ${id} foi atualizada com sucesso.`
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
  listarPostagens,
  listarPostagensPorId,
  criarPostagens,
  excluirPostagensPorId,
  updatePostagens,
  listarPostagensPorCategoria
};

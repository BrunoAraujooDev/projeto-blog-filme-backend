const fs = require('fs');
const path = require('path');
const categorias = path.join(path.dirname(require.main.filename), 'api/models/categorias.json');
const postagens = path.join(path.dirname(require.main.filename), 'api/models/postagens.json');
 
fs.unlink(categorias, function (err) {
    if (err) throw err;
    console.log('Arquivo deletado');
});
  
fs.unlink(postagens, function (err) {
  if (err) throw err;
  console.log('Arquivo deletado');
});


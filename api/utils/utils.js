const fs = require('fs');
const path = require('path');
const root_dir = path.join(path.dirname(require.main.filename), 'api/models');

const saveFile = async (arquivo, model) => {
  try {
    await fs.writeFileSync(
      path.join(root_dir, arquivo + '.json'),
      JSON.stringify(model),
      (err) => {
        if (err) throw err;
      }
    );
    return true;
  } catch (exception) {
    return false;
  }
};

const openFile = async (arquivo) => {
  let filePath = path.join(root_dir, arquivo + '.json');

  // verifica se o arquivo existe, se existir
  if (fs.existsSync(filePath)) {
    const json = fs.readFileSync(filePath);
    if (Object.keys(json).length == 0) {
      console.log('Não foi possivel abrir. Erro critico no banco', arquivo);

      // substitui por um array vazio
      await saveFile(arquivo, []);
    }
    return JSON.parse(json);
  } else {
    // caso não exista
    await saveFile(arquivo, []);

    // substitui por um array vazio
    const json = fs.readFileSync(filePath);
    return JSON.parse(json);
  }
};

module.exports = {
  saveFile,
  openFile
};

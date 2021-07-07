// Chamo o meu server
require('./api/server');

const {version, name} = require('./package.json');

console.log(`<<<-------------------------\nNome da Api: ${name}\nVersão da Api: ${version} 
Started in 'DEV' environment\n------------------------->>>`);

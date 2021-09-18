const fs = require('fs');
const path = require('path');

module.exports = app => {
    fs
        // ler diretorio
        .readdirSync(__dirname)
        //lendo arquivos que não começam com pontos, diferente de zero e seja diferente de index.js
        .filter(file => ((file.indexOf('.')) !== 0 && (file !== "index.js")))
        //Percorrer arquivos
        .forEach(file => require(path.resolve(__dirname, file))(app));
};
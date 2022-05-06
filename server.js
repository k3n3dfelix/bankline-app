//importar express
const express = require('express');

//Iniciar Express
const app = express();

//nome da pasta no dist que será feito o build
const appName = "bankline-app"

//local onde  build i´ra gerar os arquivos
const outputPath = `${__dirname}/dist/${appName}`;

//seta o diretório de build para servir o conteúdo Angular
app.use(express.static(outputPath));

//Redirecionar qualquer requsição para o index.html
app.get('/*', (request, response) =>{
  response.sendFile(`${outputPath}/index.html`);
});

//ouvir a porta que o Heroku disponibilizar
app.listen(process.env.PORT);

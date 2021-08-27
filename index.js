const express = require("express");
const app = express();
const routes = require("./routes")
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express")

require("nodemon")

require("ejs");
require("express-ejs-layouts");

const address = "localhost";
const utils = require("./utils");
const faker = require("faker");
let toggleBol=true;

app.set('view engine','ejs');

const port = process.env.PORT || 3000;
//const address = "localhost"; //localhost é o nome padrao do seu computador e está ligado ao IP 127.0.0.1

// a palavra reservada global cria uma variável ou objeto global para o sistemas. Ele pode ser visto em qualquer parta do código ou dos módulos do projeto. Assim, Users podem ser vistos tanto aqui no index.js quanto em routes.js
global.users =[];

for (let cont=0;cont<15;cont++){
    users.push({name:faker.name.findName(),email:faker.internet.email(),address:faker.address.streetAddress(),age:utils.getRandomByInterval(15,50,true),heigth:utils.getRandomByInterval(1.50,1.70,false).toFixed(2),vote:toggleBol});
    toggleBol=!toggleBol;
}

//ativa uso do EJS e do Express-ejs-layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.urlencoded({ extended: false })); //prepara a aplicacao para receber dados na forma de query string
app.use(express.json()); //prepara a aplicacao para receber dados no formato JSON

//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes);

//Criando um servidor simples com Node.js e o Express
const server = app.listen(port, () => {
  //let host = server.adress{ }.adress;
  let port = server.address().port;
  console.log(`Servidor executando na porta ${port}`); //usando template string
});



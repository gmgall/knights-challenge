// Ponto de entrada  da aplicação
var express = require('express');
var mongoose = require('mongoose');

var knights = require('./routes/knights'); // Importa as rotas para os knights

var app = express();

// Conexão ao banco
var db_url = 'mongodb://user:XXXXX@ds041218.mlab.com:41218/knights-challenge';
var mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB'));

app.use(express.json());

// Carrega os módulos roteadores nos aplicativo
app.use('/knights', knights);

var port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Servidor escutando na porta ${port}...`)
});

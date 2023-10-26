var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

function soma(a, b) {
    return a + b;
}
function subtracao(a, b){
    return a - b;
}
function multiplicacao(a, b){
    return a * b;
}
function divisao(a, b){
    return a/b;
}

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultadoSom = soma(body.a, body.b);
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultadoSom}`);
  });

app.post('/subtracao', function (req, res){
    var body = req.body;
    var resultadoSub = subtracao(body.a, body.b);
    res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultadoSub}`);
})

app.post('/divisao', function(req, res){
    var body = req.body;
    var resultadoDiv = divisao(body.a, body.b);
    res.send(`o resultado da divisão de ${body.a} e ${body.b} é ${resultadoDiv}`);
})

app.post('/multiplicacao', function(req, res){
    var body = req.body;
    var resultadoMul = multiplicacao(body.a, body.b);
    res.send(`o resultado da multiplicação de ${body.a} e ${body.b} é ${resultadoMul}`);
})
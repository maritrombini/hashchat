const http = require('http');
const express = require('express');
const funcionalidadesIO = require('socket.io');

const app = express();

const servidorHttp = http.createServer(app);
const io = funcionalidadesIO(servidorHttp);

app.use(express.static('public'));

function comportamentoDoSocket() {
  io.addListener('connection', (socket) => {
    console.log('um usuário acabou de conectar');
    socket.addListener('nova mensagem', (msg) => {
      io.emit('nova mensagem', msg);
    });
  });
}

io.addListener('connection', comportamentoDoSocket);

servidorHttp.listen(3000);

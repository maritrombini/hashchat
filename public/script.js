const botaoEnviar = document.getElementById('enviar');
const texto = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
  if (texto.value !== '') {
    socket.emit('nova mensagem', texto.value);
    texto.value = '';
  }
});

socket.addEventListener('nova mensagem', (msg) => {
  const novaMensagem = document.createElement('li');
  novaMensagem.classList.add('mensagem');
  novaMensagem.textContent = msg;
  chat.appendChild(novaMensagem);
});

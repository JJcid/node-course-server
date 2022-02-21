const lblOnline = document.querySelector('#lbl-online');
const lblOffline = document.querySelector('#lbl-offline');

const inputMessage = document.querySelector('#input-message');
const btnSend = document.querySelector('#btn-send');

const socket = io();

socket.on('connect', () => {
  console.log('connected');
  lblOnline.style.display = '';
  lblOffline.style.display = 'none';
})
socket.on('disconnect', () => {
  console.log('disconnected');
  lblOnline.style.display = 'none';
  lblOffline.style.display = '';
})

btnSend.addEventListener('click', () => {
  const message = inputMessage.value;
  socket.emit('message', {
    message,
    id: 'message',
  }, id => console.log('desde el server', id))
})
socket.on('message', console.log)
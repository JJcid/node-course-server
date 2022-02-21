const socketController = socket => {
  console.log('Client connected', socket.id)
  socket.on('disconnect', () => {
      console.log('Client disconnect', socket.id)
  })
  socket.on('message', (payload, callback) => {
      const id = 123456;
      callback({id, data: new Date()});
      socket.broadcast.emit('message', payload)
  })
}

module.exports = {
  socketController
}
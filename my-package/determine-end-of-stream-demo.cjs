'use strict'
const net = require('net')
const { finished } = require('stream')
net.createServer((socket) => {
  const interval = setInterval(() => {
    socket.write('beat')
  }, 1000)

  socket.on('data', (data) => {
    socket.write(data.toString().toUpperCase())
  })

  finished(socket, (error) => {
    if (error) {
      console.error('there was a socket error', error)
    }

    clearInterval(interval)
  })
}).listen(3000)
const socketIO = require('socket.io-client');

const socket = socketIO('http://localhost:4321');

socket.on('hello', data => {
    console.log(data);
});
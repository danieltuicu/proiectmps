const socketIO = require('socket.io-client');

const socket = socketIO('https://finalwhistel.herokuapp.com');

socket.on('hello', data => {
    console.log(data);
});
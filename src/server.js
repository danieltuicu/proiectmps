const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();

app.get('/', (res, req) => {
    req.send('Hello world!');
});

const PORT = process.env.PORT || 4321;

const server = http.Server(app);
server.listen(PORT);

const io = socketIO(server);

io.on('connection', socket => {
    console.log('Client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected')
    });

    socket.emit('hello', 'Hello, client! I\'am the server! Your\'re now connected to me!');
});


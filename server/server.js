const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

let app = express();
const port = process.env.PORT || 3000;
let server = http.createServer(app);

// web socket server
let io = socketIO(server);

// Use static middleware
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));


// Register event listener
io.on('connection', (socket) => {
    console.log('New user connected');


    socket.emit('newMessage', {
        from: 'Pera',
        text: 'Message text here',
        createdAt: 1234567
    });

    socket.on('createMessage', (message) => {
        console.log('Create Message', message);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});
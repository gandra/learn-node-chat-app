const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

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

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message, callback) => {
        console.log('Create Message', message);

        io.emit('newMessage', generateMessage(message.from, message.text));

        callback('This is from the server');


        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});
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

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});
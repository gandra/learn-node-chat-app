var socket = io();

// listening on event
socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from the server.');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});

socket.emit('createMessage', {
    from: "Ana",
    text: 'Hi'
}, function (data) {
    console.log('Got it!', data);
});


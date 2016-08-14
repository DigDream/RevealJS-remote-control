var CONTROLLER = 0;

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.send('<h1>Welcome Websocket Server</h1>');
});

io.on('connection', function (socket) {
    console.log(socket.id + 'a application connected');

    socket.on('login', function (obj) {
        console.log('a application login');
    });

    socket.on('disconnect', function () {
        console.log('a application disconnect');
    });

    socket.on('message', function (obj) {
        var data = JSON.parse(obj);
        if (data.sender === CONTROLLER) {
            var command = {};
            command.action = data.action;
            socket.broadcast.emit('message', JSON.stringify(command));
        }
        console.log('a application message');
    });

});

http.listen(3000, function () {
    console.log('listening on *:3000');
});

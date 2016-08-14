var PPT = 1;

var OP_UP = 0;
var OP_DOWN = 1;
var OP_LEFT = 2;
var OP_RIGHT = 3;

var socket = io('ws://localhost:3000');

socket.on('connect', function () {
    console.log('connection has been established.');
});

socket.on('message', function (event) {
    console.log(event);
    var data = JSON.parse(event);
    console.log(data);
    switch (data.action) {
        case OP_UP:
            Reveal.up();
            break;
        case OP_DOWN:
            Reveal.down();
            break;
        case OP_LEFT:
            Reveal.left();
            break;
        case OP_RIGHT:
            Reveal.right();
            break;
    }
});

socket.onopen = function (event) {
    console.log('connection has been established.');
};
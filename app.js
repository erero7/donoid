'use strict';

var config = require('config'),
    HOST = config.host,
    PORT = config.port,
    dgram = require('dgram'),
    parseData = require('./lib/parseData'),
    server = dgram.createSocket('udp4');

console.log(config);

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(parseData(message));
});

server.bind(PORT, HOST);

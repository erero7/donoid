'use strict';

var config = require('config'),
    HOST = config.host,
    PORT = config.port,
    dgram = require('dgram'),
    parseData = require('./lib/parseData'),
    server = dgram.createSocket('udp4'),
    sendToPlotly = require('./lib/sendToPlotly');

console.log(config);

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    var data = parseData(message);
    var formatedData = [{
            x:[data.Timestamp],
            y:[data.Accel_X],
            type:'scatter',
            mode:'lines',
            stream: {
                token: config.token
            }
        },
        {
            x:[data.Timestamp],
            y:[data.Accel_Y],
            type: 'scatter',
            mode: 'lines',
            stream: {
                token: config.token
            }
        },
        {
            x:[data.Timestamp],
            y:[data.Accel_Z],
            type: 'scatter',
            mode: 'lines',
            stream: {
                token: config.token
            }
        }
    ];
    sendToPlotly(formatedData);
});

server.bind(PORT, HOST);

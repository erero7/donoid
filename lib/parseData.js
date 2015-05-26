'use strict';

var namesArray = ['Timestamp','Accel_X','Accel_Y','Accel_Z'];
var dataSet  = require('fs').readFileSync('data.txt', 'utf-8');

var parseData = function (data) {
    var output = {};
    data = data.toString('utf-8').split(',');
    namesArray.map(function (item, i) {
       output[item] = parseFloat(data[i]);
    });
    return output;
};
console.log(parseData(dataSet));
module.exports = parseData;

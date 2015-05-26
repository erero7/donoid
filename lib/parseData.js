'use strict';

var namesArray = ['Ip','Timestamp','Accel_X','Accel_Y','Accel_Z','Roll','Pitch','Yaw','Quat.X','Quat.Y','Quat.Z','Quat.W','RM11','RM12','RM13','RM21','RM22','RM23','RM31','RM32','RM33','GravAcc_X','GravAcc_Y','GravAcc_Z','UserAcc_X','UserAcc_Y','UserAcc_Z','RotRate_X','RotRate_Y','RotRate_Z','MagHeading','TrueHeading','HeadingAccuracy','MagX','MagY','MagZ','Lat','Long','LocAccuracy','Course','Speed','Altitude'];
var dataSet  = require('fs').readFileSync('data.txt', 'utf-8');

var parseData = function (data) {
    var output = {};
    data = data.toString('utf-8').split(',');
    namesArray.map(function (item, i) {
        output[item] = item === 'Ip' ? data[i] : parseFloat(data[i]);
    });
    return output;
};

module.exports = parseData;
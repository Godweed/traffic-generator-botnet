var winston = require('winston');
var fs = require('fs');

module.exports = function (moduleName) {

    var filename = 'logs/' + moduleName + new Date().toISOString() + '.log';
    var dir = './logs';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    return new winston.Logger({
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: filename, level: 'info', json: false })
        ]
    });
};
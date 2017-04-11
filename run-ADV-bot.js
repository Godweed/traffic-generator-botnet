"use strict;"
const http = require('http'), cluster = require('cluster'), numWorkers = require('os').cpus().length;

cluster.setupMaster({
    exec: "worker-casper.js"
});
for (var i = 0; i < numWorkers; i++) {
    cluster.fork();
}

http.createServer((request, response) => {
    let browser = require('./devlibs/factory_of_faith.js');
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        // 'Connection': 'Keep-Alive;charset=utf-8',
        // 'Content-Type': 'text/javascript',
        // 'Content-Language': 'en-US',
        //'Transfer-Encoding': 'chunked',
    });
    response.write(JSON.stringify(browser));
    response.end();
}).listen(3000, () => { console.info('===-window & document factory work-==='); });
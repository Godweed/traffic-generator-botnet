const kindOfBrowser = ['chrome'/*, 'safari', 'firefox'*/], kindOfOS = [`windows`, `macOS`, `linux`],
    http = require('http'), cluster = require('cluster'), numWorkers = require('os').cpus().length;

cluster.setupMaster({
    exec: "worker-casper.js"
});
for (var i = 0; i < numWorkers; i++) {
    cluster.fork();
}

http.createServer((request, response) => { }).listen(3000, () => { console.info('===-window & document factory work-==='); })
    .on(`request`, (request, response) => {
        let browser = require(`./devlibs/browserScripts/browsers/${kindOfBrowser[getRandomInt(0, kindOfBrowser.length - 1)]}.js`);
        response.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
        response.write(JSON.stringify({ window, document } = new browser()));
        response.end();
    });
function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min };
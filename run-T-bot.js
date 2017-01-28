const cluster = require('cluster')
    , numWorkers = require('os').cpus().length;

cluster.setupMaster({
    exec: "worker-casper.js"
});

for (var i = 0; i < numWorkers; i++) {
    cluster.fork();
}
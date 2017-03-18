const cluster = require('cluster'), numWorkers = require('os').cpus().length;
cluster.setupMaster({
    exec: "worker-casper.js"
});
for (var i = 0; i < numWorkers; i++) {
    cluster.fork();
    cluster.on('exit', function (worker) {
        console.log('Worker ' + worker.id + ' cum');
        setTimeout(() => { cluster.fork(); }, 60 * 1000);
    });
}
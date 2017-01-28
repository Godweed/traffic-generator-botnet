//const schedule = require('node-schedule')
const exec = require('child_process').exec;
var scheduleCounter = 0;

function runCrawlers() {
    var process1 = exec('casperjs traffic-bot.js')
        , process2 = exec('casperjs traffic-bot.js');

    process1.stdout.on('data', function (data) {
        scheduleCounter++;
        //console.log('[process-1]', data.trim());
    });
    process2.stdout.on('data', function (data) {
        scheduleCounter++;
        //console.log('[process-2]', data.trim());
    });
}

/*
schedule.scheduleJob('05 * * * * *', function () {
   console.log("Casper-traffic-creator: " + scheduleCounter);
    runCrawlers();
});
*/
setInterval(function () {
    console.log("Casper-traffic-creator: " + scheduleCounter);
    runCrawlers();
}, 2 * 60 * 1000)
// Сессия = 6 минут 30 секунд
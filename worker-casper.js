//const schedule = require('node-schedule')
var exec = require('child_process').exec
    , logger = require('./logger')('MFA-traffic-generator')

    , scheduleCounter = 0;

function runCrawlers() {
    var process1 = exec('casperjs traffic-bot.js')
        , process2 = exec('casperjs traffic-bot.js')
        , process3 = exec('casperjs traffic-bot.js')
        , process4 = exec('casperjs traffic-bot.js');

    process1.stdout.on('data', function (data) {
        scheduleCounter++;
        //console.log('[process-1]', data.trim());
    });
    process2.stdout.on('data', function (data) {
        scheduleCounter++;
        //console.log('[process-2]', data.trim());
    });

    process3.stdout.on('data', function (data) {
        scheduleCounter++;
        //console.log('[process-3]', data.trim());
    });

    process4.stdout.on('data', function (data) {
        scheduleCounter++;
        //console.log('[process-4]', data.trim());
    });

}

/*
schedule.scheduleJob('05  * * * *', function () {
   console.log("Casper-traffic-creator: " + scheduleCounter);
    //runCrawlers();
});
*/

setInterval(function () {
    console.log("Casper-traffic-creator work: " + scheduleCounter + ' times;');
    //logger.info("Casper-traffic-creator work: " + scheduleCounter + ' times;');
    runCrawlers();
}, 3.2 * 60 * 1000);
// Сессия === 1 минута 03 секунды

setInterval(function () {
    logger.log("Casper-traffic-creator work: " + scheduleCounter + ' times;');
    runCrawlers();
}, 120 * 60 * 1000);

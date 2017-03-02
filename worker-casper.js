var exec = require('child_process').exec
    , logger = require('./logger')('MFA-traffic-generator')

    , scheduleCounter = 0;

function runCrawlers() {
    var process1 = exec('casperjs traffic-bot.js')
        , process2 = exec('casperjs traffic-bot.js')
        , process3 = exec('casperjs traffic-bot.js')
        , process4 = exec('casperjs traffic-bot.js')
        , process5 = exec('casperjs traffic-bot.js')
        , process6 = exec('casperjs traffic-bot.js')
        , process7 = exec('casperjs traffic-bot.js')
        , process8 = exec('casperjs traffic-bot.js')
        , process9 = exec('casperjs traffic-bot.js')
        , process10 = exec('casperjs traffic-bot.js');
    /*
    var process1 = exec('casperjs --proxy=127.0.0.1:3000 traffic-bot.js')
        , process2 = exec('casperjs --proxy=127.0.0.1:3000 traffic-bot.js')
        , process3 = exec('casperjs --proxy=127.0.0.1:3000 traffic-bot.js')
        , process4 = exec('casperjs --proxy=127.0.0.1:3000 traffic-bot.js')
        , process5 = exec('casperjs --proxy=127.0.0.1:3000 traffic-bot.js')
        , process6 = exec('casperjs --proxy=127.0.0.1:3000 traffic-bot.js')
        , process7 = exec('casperjs --proxy=127.0.0.1:3000 traffic-bot.js')
        , process8 = exec('casperjs --proxy=127.0.0.1:3000 traffic-bot.js')
        , process9 = exec('casperjs --proxy=127.0.0.1:3000 traffic-bot.js')
        , process10 = exec('casperjs --proxy=127.0.0.1:3000 traffic-bot.js');
        */
    scheduleCounter += 10;
}


runCrawlers();
runCrawlers();




setInterval(function () {
    console.log("Casper-traffic-creator work: " + scheduleCounter + ' times;');
    //logger.info("Casper-traffic-creator work: " + scheduleCounter + ' times;');
    runCrawlers();
    runCrawlers();
}, 1 * 60 * 1000);

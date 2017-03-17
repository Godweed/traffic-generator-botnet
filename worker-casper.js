var exec = require('child_process').exec, scheduleCounter = 0;
const command = 'casperjs --proxy=127.0.0.1:3000 --ignore-ssl-errors=true traffic-bot.js';

function runCrawlers(command) {
    var process1 = exec(command)
        , process2 = exec(command)
        , process3 = exec(command)
        , process4 = exec(command)
        , process5 = exec(command);
    scheduleCounter += 5;
}

runCrawlers(command);
runCrawlers(command);
runCrawlers(command);
runCrawlers(command);
runCrawlers(command);
runCrawlers(command);
runCrawlers(command);
runCrawlers(command);
runCrawlers(command);
runCrawlers(command);
runCrawlers(command);
runCrawlers(command);

setInterval(function () {
    runCrawlers(command);
    runCrawlers(command);
    runCrawlers(command);
    runCrawlers(command);
    runCrawlers(command);
    runCrawlers(command);
    runCrawlers(command);
    runCrawlers(command);
    runCrawlers(command);
    runCrawlers(command);
    console.log(`CasperJS  <HomoSapiensPretender/>  work:     << ${scheduleCounter} >>     times;`);
}, 60 * 1000);

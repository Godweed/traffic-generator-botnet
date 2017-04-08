function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min };
const kindOfBrowser = ['chrome', 'safari', 'firefox'], kindOfOS = [`windows`, `macOS`, `linux`], cookies = require(`./cookie.js`).string;
let browser = require(`./browserScripts/browsers/${kindOfBrowser[getRandomInt(0, kindOfBrowser.length - 1)]}.js`), {window, document} = browser;
/*
*
*     Tuning;
*
*/
document.cookie = cookies;


module.exports = { window, document };
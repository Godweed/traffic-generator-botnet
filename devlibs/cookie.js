var syntetic = {
    string: '',
    object: {}
};
const schemas = {
    MFA: {
        '_ga': 'GA1.2.451250355.1487406792',
        '_gat': 1,
        '_ym_isad': 2,
        '_ym_uid': 1487406792427334436,
        '_ym_visorc_42409674': 'w'
    },
    google: {
        'AID': 'AJHaeXJLXUotPpitrOeLws_HIlptUJiPI8ccLXQqVzDmXKpwvF8XENM',
        'APISID': 'Wu8KEyiHa7tO-avC/Aq3h1vLGbkGDjZxq6',
        'HSID': 'AYtZsLqnbLeiMUeFM',
        'NID': '97=GW-mMXLI-GN0H1zwbzjrdAJIvdvPR3EYP8f6Y1PmMB1CWtV60xLgL-5UlYr16o1xVrRDRtEdoKhO_9j0--Sl18YW4OiNtvB50pPbBSxPSD3U4TcG0dGbzKy1RXfB1AOu0qi7ilv_JAXbV4yBjBLsnJ6IRdJC2_KOHwM6kh8RBOtUG0-5OhQdZacFl_ElnoDXROv1_YJ0kJFv1UM8bmU2OK4o_Em6wAiQdbZfTw',
        'SAPISID': '-iA73VoSa6Cvh2PG/A-PB5vteaheuxB8Xn',
        'SID': 'SQSFUWRt7z1lDyquboH_LfEQYrNTEoYYd6KuhLG8q4GVqF-YQZyySRGNYoIScIJTJwY8Ww.',
        'SNID': '94=WnPblt1nETVi2AKChu7A1Ehx1jJqM1Q39-beB_Jb=5n91C0SbxU63BdKs',
        'SSID': 'AjTOb47koFU6BltvS',
        'TAID': 'AJHaeXLf_ysgxNO8-wAP4hRy3mGPzvWG4c0hy-yVRbzSo_CtU8BxASEOULKSBe02-BbVV-766Sk_cjtOubXJjZx3U3SfZqP4e0rCkDSknhHxleb2VPNK_D6kuamTL_89CGlXpfr5AA'
    },
    youtube: {
        'APISID': 'Wu8KEyiHa7tO-avC/Aq3h1vLGbkGDjZxq6',
        'HSID': 'AA0caigcKqS_XhSRc',
        'LOGIN_INFO': '09555f58ac1a773fe98247f2e85e0d20c0EAAAB7IjEiOiAxLCAiOCI6IDM3Mzg5NjY2MzQyOSwgIjMiOiAzOTI2MzIxMjczLCAiNCI6ICJHQUlBIiwgIjciOiAwfQ==',
        'PREF': 'f5=30&al=en&f1=50000000',
        'SAPISID': '-iA73VoSa6Cvh2PG/A-PB5vteaheuxB8Xn',
        'SID': 'SQSFUWRt7z1lDyquboH_LfEQYrNTEoYYd6KuhLG8q4GVqF-YQZyySRGNYoIScIJTJwY8Ww.',
        'SSID': 'A7lFsaA78jiPPfzZJ',
        'VISITOR_INFO1_LIVE': '08AShc_khIg',
        'YHdHb.resume': '0-YNfVipJ64:283,UttXZbDZ1Hc:286,mVnHaNBxt_M:3409',
        'YSC': 'Xz6t5wzlZO8',
        '_ga': 'GA1.2.1039247475.1448634525'

    },
    facebook: {
        'act': '1487401946746%2F0',
        'c_user': '100000734917096',
        'csm': 2,
        'datr': 'qV4OVaV6N0NrsjgfoCE8yJsh',
        'fr': '05kiLtSdqgNxeJqeg.AWU-BBwz58n8QM--kAUi6xi2b3Y.BXUu_f.SF.FiF.0.0.BYp_PQ.AWVllnAV',
        'lu': 'ghoRPfxWZdB5pDOAcCyPWJFA',
        'p': -2,
        'presence': 'EDvF3EtimeF1487401938EuserFA21B00734917096A2EstateFDutF1487401938574CEchFDp_5f1B00734917096F2CC',
        'sb': '3-9SV14CygXcxmnBkMs7B0h0',
        'xs': '207%3AFb2RORTqVs3vUQ%3A2%3A1470798360%3A1623'
    }
};
//
// Generate ancillary strings:
//
function generateCookieSubstring(kindOfSynteticAncillary, j) {
    let returnedStr = '';
    for (let i = 0; i < j; i += 1) {
        returnedStr += kindOfSynteticAncillary[getRandomInt(0, kindOfSynteticAncillary.length - 1)];
    }
    return returnedStr;
}
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
function* generateAlphaNum() {
    // 0..9
    yield* generateSequence(48, 57);
    // A..Z
    yield* generateSequence(65, 90);
    // a..z
    yield* generateSequence(97, 122);
}
function* generateAlphaInteger() {
    yield* generateSequence(48, 57);
}
function* generateAlphaLetters() {
    yield* generateSequence(65, 90);
    yield* generateSequence(97, 122);
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//
// Create ancillary strings for cookies generate:
//
var synteticString = synteticIntegers = synteticLetters = '';
for (let code of generateAlphaNum()) {
    synteticString += String.fromCharCode(code);
}
for (let code of generateAlphaInteger()) {
    synteticIntegers += String.fromCharCode(code);
}
for (let code of generateAlphaLetters()) {
    synteticLetters += String.fromCharCode(code);
}
/*
*
*       Create cookies:
*
*/
var createSynteticCookies = {
    _ga: '',
    PREF: ''
};
Object.defineProperty(createSynteticCookies, "_ga", {
    get: function () {
        return `GA1.2.${generateCookieSubstring(synteticIntegers, 9)}.${getRandomInt(11, 14)}${generateCookieSubstring(synteticIntegers, 8)}`;
    }
});
Object.defineProperty(createSynteticCookies, "PREF", {
    get: function () {
        return `f${generateCookieSubstring(synteticIntegers, 1)}=${generateCookieSubstring(synteticIntegers, 2)}&al=en&f${generateCookieSubstring(synteticIntegers, 1)}=${generateCookieSubstring(synteticIntegers, 8)}`;
    }
});
syntetic.string = createSynteticCookies._ga + ';_gat=1;' + createSynteticCookies.PREF;
syntetic.string.trim();
//  _ga=GA1.2.893481632.1490194106
//  PREF: 'f5=30&al=en&f1=50000000'
console.log(`СИНТЕТИЧЕСКИЕ COOKIE'S:   ${createSynteticCookies._ga} && ${createSynteticCookies.PREF}`)
module.exports = {
    string: syntetic.string,
    object: syntetic.object
};
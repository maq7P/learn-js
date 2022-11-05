"use strict";
//https://leetcode.com/problems/license-key-formatting/
function licenseKeyFormatting(s, k) {
    const initS = s.toUpperCase().split("-");
    let res = "";
    console.log(initS);
    for (let c of initS) {
        console.log(res.length);
        if (res.length > 0 && res.length % k === 0) {
            res += "-";
        }
        res += c;
    }
    return res;
}
;
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));

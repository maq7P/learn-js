"use strict";
function checkRecord(s) {
    let a_Count = 0, l_Count = 0;
    for (let c of s) {
        if (c === "A") {
            a_Count++;
            if (a_Count === 2)
                return false;
        }
        if (c === "L") {
            l_Count++;
            if (l_Count > 2)
                return false;
        }
        else
            l_Count = 0;
    }
    return true;
}
console.log(checkRecord("AAALLP"));

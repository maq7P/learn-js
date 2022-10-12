"use strict";
function checkRecord(s) {
    let isPrevAbsent = false, absentCount = 0, lateCount = 0;
    for (let record of s) {
        if (record === "A") {
            isPrevAbsent = true;
            absentCount++;
        }
        else {
            isPrevAbsent = false;
            absentCount = 0;
        }
        if (record === "L")
            lateCount++;
    }
    console.log("absentCount: ", absentCount);
    console.log("lateCount: ", lateCount);
    return true;
}
console.log(checkRecord("AAALLP"));

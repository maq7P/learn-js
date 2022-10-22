"use strict";
//https://leetcode.com/problems/first-bad-version/
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
var solution = function (isBadVersion) {
    return function (n) {
        let left = 1;
        let right = n;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            const calledPrevious = isBadVersion(mid - 1);
            const calledCurrent = isBadVersion(mid);
            const calledNext = isBadVersion(mid + 1);
            if (calledCurrent && (!calledPrevious || !calledNext)) {
                return mid;
            }
            if (calledPrevious) {
                right = mid - 1;
                continue;
            }
            if (calledNext || (!calledNext && !calledPrevious)) {
                left = mid + 1;
            }
        }
        return 0;
    };
};
console.log(solution((bad) => bad >= 1)(5));

"use strict";
//https://www.lintcode.com/problem/920/description
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
class MeetingRooms {
    /**
     * @param intervals: an array of meeting time intervals
     * @return: if a person could attend all meetings
     */
    canAttendMeetings(intervals) {
        const sortedByStart = intervals.sort(({ start: startA }, { start: startB }) => startA - startB);
        for (let i = 0; i < sortedByStart.length - 1; i++) {
            if (sortedByStart[i + 1].start < sortedByStart[i].end) {
                return false;
            }
        }
        return true;
    }
}
const meetingRooms = new MeetingRooms();
console.log(meetingRooms.canAttendMeetings([{ start: 10, end: 20 }, { start: 20, end: 30 }, { start: 2, end: 3 }]));
console.log(meetingRooms.canAttendMeetings([{ start: 10, end: 20 }, { start: 20, end: 30 }, { start: 2, end: 300 }]));

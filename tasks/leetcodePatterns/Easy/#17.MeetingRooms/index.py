def canAttendMeetings(intervals):
  intervals.sort(key=lambda x:x["start"])

  for i in range(len(intervals) - 1):
    if intervals[i]["end"] > intervals[i + 1]["start"]:
      return False

  return True

# False
print(canAttendMeetings([
  {"start": 5, "end": 15},
  {"start": 11, "end": 20},
]))

# True
print(canAttendMeetings([
  {"start": 11, "end": 20},
  {"start": 5, "end": 10},
]))
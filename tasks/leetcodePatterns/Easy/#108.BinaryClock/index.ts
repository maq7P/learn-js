const readBinaryWatch = turnedOn => {
  let ret = []
  
  function toTime(num) {
    const h = num >> 6
    const m = num & (~960)
    if ( h > 11 || m > 59) {
      return null
    }
    return h + ':' + String(m).padStart(2, '0')
  }
  
  function countBits(num) {
    let count = 0
    while (num) {
      (num & 1) && count++
      num >>= 1
    }
    return count
  }
  
  let i = 0
  while (i < 1024) {
    if (countBits(i) === turnedOn) {
      const time = toTime(i)
      time && ret.push(time)
    }
    i++
  }
 
  return ret;
}
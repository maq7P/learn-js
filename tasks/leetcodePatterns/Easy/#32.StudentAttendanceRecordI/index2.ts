function checkRecord2(s: string): boolean {
  return !s.match("\[A]{3}\g") && !s.match(/^([^L]*L){3}[^L]*$/g)
}

console.log(checkRecord2("AAALLP"))

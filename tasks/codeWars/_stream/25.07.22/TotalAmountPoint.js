//https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
    games.reduce((output,current)=>{
        return output += current[0]>current[2] ? 3 : current[0] === current[2] ? 1 : 0;  },0)
  }
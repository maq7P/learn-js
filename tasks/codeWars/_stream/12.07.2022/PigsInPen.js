//https://www.codewars.com/kata/58fdcc51b4f81a0b1e00003e/train/javascript

function Game(board){
	if(board <= 0) {
		this.board = []
	} else {
		this.board = board
	}
}

Game.prototype.play = function(lines){
	lines % 2 === 1
	// logic keep

	lines % 2 === 0
	//unsafe
	return this.board
}

const game = new Game(4)
console.log(game)
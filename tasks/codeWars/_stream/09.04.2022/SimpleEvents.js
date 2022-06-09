//https://www.codewars.com/kata/52d3b68215be7c2d5300022f/train/javascript

class Event {
	constructor() {
		this.handlers = []
	}

	subscribe(fn) {
		this.handlers.push(fn)
	}

	unsubscribe(fn) {
		this.handlers = this.handlers.filter(f => f !== fn)
	}

	emit(...args) {
		this.handlers.forEach(f => f(...args))
	}
}

const event = new Event();
event.subscribe((kek) => console.log(kek))
event.subscribe((lol) => console.log(lol))
event.emit(2)
event.emit(3)

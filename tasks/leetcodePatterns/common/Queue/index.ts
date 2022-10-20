export default class Queue {
	#storage: Record<string | number, any> = {}
	#last: number = 0
	#first: number = 0

	enqueue(item: any) {
		this.#storage[this.#last] = item
		this.#last++
	}

	dequeue() {
		if(this.size === 0) return new Error("empty data")

		const val = this.#storage[this.#first]
		delete this.#storage[this.#first]
		this.#first++

		return val
	}

	get size() {
		return this.#last - this.#first
	}
	
	getIndex(idx: number) {
		return this.#storage[idx]
	}
}
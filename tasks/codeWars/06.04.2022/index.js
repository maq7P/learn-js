//https://www.codewars.com/kata/55d9f257d60c5fd98d00001b

function Node(data) {
	this.data = data;
	this.next = null;
}

function removeDuplicates(head) {
	if(!head)
		return head;

	let cur = head;

	while(cur && cur.next != null){
		const nextNode = cur.next
		if(nextNode.data === cur.data) {
			cur.next = cur.next.next
		} else {
			cur = cur.next
		}
	}

	return head
}
const test1 = {
	data: 1,
	next: {
		data: 1,
		next: {
			data: 2,
			next: {
				data: 2,
				next: {
					data: 2,
					next: {
						data: 2,
						next: null
					}
				}
			}
		}
	}
}
const test2 = {
	data: 1,
	next: null
}
const test3 = null
removeDuplicates(test1)


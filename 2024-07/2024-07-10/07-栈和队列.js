class Stack {
	arr = []
	pop () {
		return this.arr.pop()
	}
	push (value) {
		return this.arr.push(value)
	}
}

const s = new Stack()
s.push(1)
s.push(2)
s.push(3)


s.pop()
console.log(s.arr)
s.pop()
console.log(s.arr)



class Queue {
	arr = []
	pop () {
		return this.arr.shift()
	}
	push (value) {
		return this.arr.push(value)
	}
}

const q = new Queue()
q.push(1)
q.push(2)
q.push(3)


q.pop()
console.log(q.arr)
q.pop()
console.log(q.arr)
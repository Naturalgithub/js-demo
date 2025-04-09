let a = {}
 
Object.defineProperties(a, {
	x: {
		set(value) {
			return this._x = value
		},
		get () {
			return this._x++
		}
	}
})

a.x = 1

console.log(a.x);
console.log(a.x);
console.log(a.x);

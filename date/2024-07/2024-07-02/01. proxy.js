let a = new Proxy({}, {
	set (target, porpertyKey, value, reciver) {
		return target[porpKey]

	},
	get (target, porpKey, reciver) {

		if (porpKey === 'x') {
			 target[porpKey] = target[porpKey]++ || 1
		}

		return target[porpKey]
	}

})
// console.dir(a)

console.log(a.x);
console.log(a.x);
console.log(a.x);

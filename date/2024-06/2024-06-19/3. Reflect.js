let obj = {
    a: 1,
    b: 2,
    get c() {
        return this.a + this.b
    }
}

let b = new Proxy(obj, {
    get: function (target, prop, receiver) {
        console.log(`getting ${prop}`);
        // return Reflect.get(target, prop, receiver)
        return target[prop]
    }
})

b.c
// 1. objectdefineProperty
// let a ={}
// Object.defineProperties( a, {
//    'x':{
//      get() {return this._x++},
//      set(value) {return this._x = value},
//     }
// })

// a.x = 1

// console.log(a.x);
// console.log(a.x);
// console.log(a.x);



// 2. proxy
// let a = new Proxy({}, {
//     get: function(target, prop, receiver) {
//         if(prop=='x'){
//             target[prop] = target[prop] + 1 || 1
//         }
//         return target[prop]
//     }
// })
// console.log(a.x);
// console.log(a.x);
// console.log(a.x);

// 3.
// let a = {}
// a.x =0

// a.valueOf = function() {
//     return this.x++
// }

// console.log(a == 0 && a==1 ? 1 : null)
// console.log(a.x)
// console.log(a== 2 && a.x)


// 4.
// class a {
//     #value = 0
//     constructor(value) {
//         this.#value = value
//     }
//     valueOf() {
//         return this.#value++
//     }
// }
// const b = new a(0)
// console.log(b == 0 && b == 1 ? 1 : null);
// console.log(b.valueOf());
// console.log(b.valueOf());

let a ={}
Object.defineProperties(a,{
    x:{
        get() {return this._x ++},
        set(value) {return this._x = value}
    }
})

a.x = 1
console.log(a.x);
console.log(a.x);
console.log(a.x);




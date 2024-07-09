Promise.resolve(9)
    .then(() => {
        console.log(0);
        return Promise.resolve(4);
    })
    .then((res) => {
        console.log(res) // 4
    })

Promise.resolve()
    .then(() => {
        console.log(1);
        return Promise.resolve(77);
    }).then((res) => {
        console.log(res);
        console.log(2);
    }).then(() => {
        console.log(3);
    }).then(() => {
        console.log(5);
    });



// loop: then Promise.resolve(4)  then.res

// mic: 0
// console.log(Promise.resolve(4));


//0 1  Promise.resolve(4) 2  3   5

// l1 cl:0 return:Promise.resolve(4)   ||    cl 1 

// l2  cl:Promise.resolve(4) ||   cl:2

// l3  cl:3

// l4 cl:5


// cl: 0  1  2 3 cl:Promise.resolve(4)  5

// mic cl:Promise.resolve(4) 




// l1 cl:0 return:Promise.resolve(4)   ||    cl:1  return Promise.resolve(77);

// l2  cl:Promise.resolve(4) || cl:2 cl:Promise.resolve(77)

// 

// l3  cl:3

// l4 cl:5

// main:  cl:0 cl:1 cl:2 cl:3 

// mic: cl:Promise.resolve(4) cl:Promise.resolve(77)

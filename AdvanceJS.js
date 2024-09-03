async function style() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}


function sum(a, b, c) {     //for spread syntax
    return a + b + c
}


(async function main() {

    console.log(a1);  //for Hoisting

    //Immediately Invoked Function Expression(IIFE)

    //let a = await sleep()
    //console.log(a)
    //let b = await sleep()
    //console.log(b)

    //Destructuring
    let [x, y, rest] = [1, 5, 7, 8, 9, 10]
    console.log(x, y, rest)

    //Destructuring in Objects
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let { a, b } = obj
    console.log(a, b)

    //Spread syntax
    let arr = [1, 4, 6]
    console.log(arr[0] + arr[1] + arr[2])
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr))


    var a1 = 7;    //Hoisting , NOTE: it occurs in var only not in let & const
})()


let arr = [1,2,4,5,7]
//index    0,1,2,3,4
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

arr[0]=20;

console.log(arr.toString())
console.log(arr.join(" and "))

console.log(arr.pop());//removes the last one
console.log(arr);
console.log(arr.push(100));//to insert an element at the last.
console.log(arr);
console.log(arr.shift());//removes thr first element
console.log(arr);
console.log(arr.unshift("Deepa"));//to insert an element at first.
console.log(arr);

console.log(delete arr[4]);
console.log(arr);

console.log(arr.length);
console.log(arr[4]);



let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [9,8,7]

console.log(a1.concat(a2,a3));//used to concatenate

console.log(arr.sort());//used to sort the array

console.log(arr.splice(2,3));//removes element from at index 2 till index 3

console.log(arr.splice(1,3,222,333));//Splice can be used to add new items to an array . Here it adds 222 and 333 in between index 1,3 

console.log(arr);

console.log(arr.slice(2));//Slices out a piece from an array.It creates a new array . Here it slice from index 2 till last index

console.log(arr.slice(2,3));//slice from index 2 till index 3

//Loops in Array

let a = [1,93,5,6,88]

//for (let index = 0; index < a.length; index++) {
//    const element = a[index];
//   console.log(element);
//}

//a.forEach((value,index,arr)=>{
//   console.log(value,index,arr)
//})

//let obj = {
//    a:1,
//   b:2,
//    c:3
//}
//for(const key in obj){
//    if(Object.hasOwnProperty.call(obj,key)){
//        const element = obj[key];
//        console.log(element)
//    }
//}

for (const value of a) {
    console.log(value)
}
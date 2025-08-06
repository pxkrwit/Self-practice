//B

let arr1 = ['tan', 100 ,true, NaN , undefined ] // Main array

console.log(arr1.length) // 1.Print length of arry
console.log(arr1[0]) // 2.Print first array
console.log(arr1[arr1.length - 1]) // 3.Print last array

arr1.push(['arm','euro'],{name : "pluem"}) // Add new array and object to main array

console.log(arr1 ) // 4.Print new array after add new array

// Print first - last array by loop
for ( i = 0 ; i <= arr1.length ; i++) {
    console.log(arr1[i])
} 
    
arr1.pop() // Remove last array
console.log(arr1) // 6.Print new array after remove object from array

let str = "hello World"
const strCh = [...str]
console.log(strCh)

// Create new array
let arr2 = new Array()
console.log(arr2)
let arr3 = new Array(5)
console.log(arr3)

let arr4 = Array.of(10) // Create array with item 10
console.log(arr4)
let arr5 = Array.from(arr4) // Coppy arr4
console.log(arr4)

// นิพจน์ (expression) ต้องคืนค่าเสมอ จะเป็นอะไรก็ได้

const [,,a,,...b] = [5,10,15,20,25]
console.log(a)
console.log(typeof a)
console.log(b)
console.log(typeof b)
//primitive data types (Stack)

let isLogged = true    // boolean  => type of is boolean
let name = "Nisha"   // string    => type of is string
let marks = 99.56   // number    => type of is number
let rollNo = 4546657766876878778957n   // bigint    => type opf is bigint
let city;   // undefined     => type of is undefined
let salary = null  // null   => type of is object


console.table([typeof isLogged, typeof name, typeof marks, typeof rollNo, typeof city, typeof salary])


//objects (Heap)

let arr = [1, 2, 3, 4, 5] //array   => type of is object
let obj = { name: "Nisha", age: 21 }  //object  => type of is object
let date = new Date()  //date    => type of is object
const myFunction = function hello() {   //type of function
    console.log("hello world")
}


console.table([typeof arr, typeof obj, typeof date, typeof myFunction])



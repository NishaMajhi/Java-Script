let firstName = "Nisha"

//length 
// console.log(firstName.length)

//concat()
let lastName = "Majhi"
let name = firstName.concat(lastName)
// console.log(name)

//charAt() indexOf()
// console.log(firstName.charAt(0))
// console.log(firstName.indexOf("i"))

//includes(), startsWith(), endsWith()
let greeting = "Hello Good Morning"
// console.log(greeting.includes("good")) //false
// console.log(greeting.includes("Good"))   //true
// console.log(greeting.startsWith("Hello"))
console.log(greeting.endsWith("ing"))

//trim() ,trimStart(), trimEnd()
let city = "           Rudrapur      "
// console.log(city.trim())
// console.log(city.trimStart())
// console.log(city.trimEnd())

//slice() substring()
console.log(greeting.slice(-3)) //last three character
console.log(greeting.slice(0, 5))
console.log(greeting.substring(0, 5))

//replace()
let newName = firstName.replace("N", "Man") //firstName wont change, changes will be reflects in new variable
// console.log(newName, firstName)


//split()
// console.log(greeting.split(""))

//toUpperCase() toLowerCase()
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
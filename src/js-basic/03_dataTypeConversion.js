//-----------from another to Number----------------------

/*
=======================Notes===================
 "33" => 33
 "33dffg" => NaN
 null => 0
 undefined => NaN
 true/false => 0/1
*/

let num = 343
// console.log(num, typeof num)

let numString1 = "343"
let convertStringToNumber1 = Number(numString1) // 343
// console.log(typeof convertStringToNumber1, convertStringToNumber1)

let numString2 = "343dfgfd"
let convertStringToNumber2 = Number(numString2)  // NaN
// console.log(typeof convertStringToNumber2, convertStringToNumber2)  //typeof is number but value is NaN

let numNull = null
let convertNullToNumber = Number(numNull) // 0
// console.log(typeof convertNullToNumber, convertNullToNumber)  //typeof is number but value is 0

let numUndefined = undefined
let convertUndefinedToNumber = Number(numUndefined) // NaN
// console.log(typeof convertUndefinedToNumber, convertUndefinedToNumber)  //typeof is number but value is NaN

let numBoolean = true
let convertBooleanToNumber = Number(numBoolean) // 1
// console.log(typeof convertBooleanToNumber, convertBooleanToNumber)  //typeof is number but value is 1






//------------------from another to a String-----------

/*
====================Notes=================
 435 => "435"
 true => "true"
 null => "null"
 undefined => "undefined"
 
*/

let stringNum = 454
let convertNumberToString = String(stringNum) // "454"
// console.log(typeof convertNumberToString, convertNumberToString)  typeof string and value is "454"


let stringBoolean = true
let convertBooleanToString = String(stringBoolean) // "true"
// console.log(typeof convertBooleanToString, convertBooleanToString)  typeof string and value is "true"


let stringUndefined = undefined
let convertUndefinedToString = String(stringUndefined) // "undefined"
// console.log(typeof convertUndefinedToString, convertUndefinedToString) //typeof string and value is "undefined"

let stringNull = null
let convertNullToString = String(stringNull) //"null"
console.log(typeof convertNullToString, convertNullToString)  //typeof string and value is "null"


//---------------------from another to Boolean

/*
======================Notes====================
 true => 1, false => 0
 "" => false
 "fdgfd" => true
*/

let booleanNumber = 1
let convertNumberToBoolean = Boolean(booleanNumber) // true
// console.log(typeof convertNumberToBoolean, convertNumberToBoolean)  // typeof boolean and value is true

let booleanString1 = "nisha"
let convertStringToBoolean1 = Boolean(booleanString1) //true
// console.log(typeof convertStringToBoolean1, convertStringToBoolean1)  // typeof boolean and value is true

let booleanString2 = ""
let convertStringToBoolean2 = Boolean(booleanString2) // false
// console.log(typeof convertStringToBoolean2, convertStringToBoolean2) 

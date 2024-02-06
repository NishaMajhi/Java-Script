//------------------------number----------------------

const num1 = 209.6977;
// console.log(num1.toString().length);
console.log(num1.toFixed(2));
console.log(num1.toPrecision(3));

const num2 = 10000000;
console.log(num2.toLocaleString());
console.log(num2.toExponential(2));

//-------------------------------Math------------------
// console.log(Math.abs(-4));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));


// console.log(Math.random()); //0 - 1
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1))

//generate 6 digit otp
const min = 100000;  //inclusive
const max = 999999;  //exclusive
console.log(Math.floor(Math.random() * (max - min + 1)) + min)


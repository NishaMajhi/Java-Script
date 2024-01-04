const num = [1, 2, 3, 4, 5, 61, 7]

1.
//forEach()
num.forEach((data) => {
    // console.log(data);
})

2.
//every() -> take a call back function and return true when all the values pass the condition
const isBelow = ((data) => data <= 18)
// console.log(num.every(isBelow));

3.
let iterator = num.entries();  //convert array into key:value format where key is index and value are data of that index
// console.log(iterator.next().value);

4.
//filter() -> return a new array with data who pass the test
const filteredNum = num.filter((data) => { return data >= 5 })
// console.log("Original Number Array", num);
// console.log("filtered Num", filteredNum);

5.
//map() -> perform some operation on each data of array , it create new array
const num2 = []
num.map((data) => { num2.push(data * data) })
console.log(num);
console.log(num2);

6.
//from() -> convert into array from iterable data (not object)
// console.log(Array.from("Nisha"));  
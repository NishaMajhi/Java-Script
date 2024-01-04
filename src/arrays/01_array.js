//=========================Array====================
const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = new Array("hello", "World", "How")

1.
//push() and pop() -> make changes in real array
// arr1.push(66);
// arr1.pop()
// console.log(arr1);

2.
//unshift() and shift()   -> make changes in real array
// arr1.unshift(66)
// arr1.shift()
// console.log(arr1);

3.
//join()
// const newArr1 = arr1.join()  //convert into string
// console.log("type is ", typeof newArr1, "new Array ", newArr1);
// console.log("type is ", typeof arr1, "Array ", arr1);

4.
//slice() and splice()
console.log("Original Array : ", arr1);

const newArr1 = arr1.slice(1, 3)  //include first range and exclude last range
console.log("Original Array after slice: ", arr1);   //does not change original array
console.log("sliced array : ", newArr1);  //element of index 1 and 2 only

const newArr2 = arr1.splice(1, 3)   //include both first and last range
console.log("Original Array after splice: ", arr1);  //change original array
console.log("spliced array : ", newArr2);   //element of index 1,2,3


// console.log(arr1.includes(58));  //false
// console.log(arr1.indexOf(58));  //-1

5.
//concat()  -> changes reflects on new array
const marvel = ["spiderman", "thor", "spiderman"]
const dc = ["superman", "batman", "flash"]

// marvel.push(dc)  //change in original array and push the dc array in single index
// console.log("Marvel Heroes", marvel);
// console.log("DC Heroes", dc);

// const allHeroes = marvel.concat(dc)  //concat both array and store in new array but does not change any original array
// console.log("Marvel Heroes", marvel);
// console.log("DC Heroes", dc);
// console.log("all Heroes", allHeroes);

6.
//spread operator  -> it spread all the values
// const allHeroes = [...marvel, ...dc]  //here first both array value spread then merge into a single array
// console.log("all heroes : ", allHeroes);

7.
let myArr = [1, 2, 3, [41, 42], 5, 6, [71, 72, [711, 712]]]
// console.log(myArr);
// console.log(myArr.flat(2));  //we have to give depth
// console.log(myArr.flat(Infinity));  //it will calculate depth automatically


// console.log(Array.isArray("Nisha"));  //false



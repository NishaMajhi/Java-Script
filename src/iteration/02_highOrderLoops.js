//1. filter -- it will return an array of values that passes the condition
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((book) => book.genre === "History")

userBooks = books.filter((book) => {
    return book.publish >= 1995 && book.genre === "Science"
})


// console.log(userBooks);



//map  -- return an array of value
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newNum = myNum.map((num) => {
    return (num = num * 5)
})

// console.log(newNum);


//--------chaning-------------
newNum = myNum
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 50)

// console.log(newNum);


//3. reduce  -- we will get single value based on condition
let numArr = [1, 2, 3, 4]

let product = numArr.reduce((acc, curVal) => {
    // console.log("acc : ", acc, " cur val : ", curVal);
    return acc * curVal
}, 1)

let sum = numArr.reduce((acc, curVal) => acc + curVal, 0)

// console.log(product);

// console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let totalPrice = shoppingCart.reduce((acc, course) => {
    return acc + course.price
}, 0)

console.log(totalPrice);
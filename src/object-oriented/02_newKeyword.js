function square(num) {
    return (num * num)
}

square.power = 2  //injection custom properties same as objets
console.log(square.power)

// console.log(square(2))
// console.log(square.prototype)  // empty object {} -> means function is function and also an object where we can have our own methods


function createUser(name, score) {
    this.name = name
    this.score = score
}

//injecting custome prototype function
createUser.prototype.print = function () {
    console.log(`${this.name} and ${this.score}`)
}

const userOne = new createUser("nisha", 67)  // by using new keyword we initiated an empty object and createUser method assign value, custom methods attach only in object case
// console.log(userOne)  // createUser { name: 'nisha', score: 67 }  only showing properties not methods
// userOne.print()  // nisha and 67
// console.log(createUser)  // [Function: createUser]
// console.log(createUser.prototype)  // { print: [Function (anonymous)] }
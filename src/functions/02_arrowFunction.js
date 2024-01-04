const user = {
    userName: "Nisha",
    price: 400,
    welcomeMessage: function () {
        console.log(`Welcome ${this.userName}`); //we can use this keyword in object
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "Neha"
// user.welcomeMessage()


//-------------------This Keyword in function-----------------------------
function fun1() {
    const userName = "Nisha"
    console.log(this.userName);  //we cant access fields using this keyword in function
    console.log(this);   //give setImmediate, setInterval, Getter/Setters and some other things
}

// fun1()


const fun2 = function () {
    const userName = "Nisha"
    console.log(this.userName);  //we cant access fields using this keyword in function
    console.log(this); //give setImmediate, setInterval, Getter/Setters and some other things
}

// fun2()



// ---------------arrow functions---------------
const fun3 = () => {
    const userName = "Nisha"
    console.log(this.userName);  //we cant access fields using this keyword in function
    console.log(this); //give an empty object
}

// fun3()

// const addTwoNumbers = (num1, num2) => (num1 + num2) //implicit return
const addTwoNumbers = (num1, num2) => { return num1 + num2 } //explicit return
// console.log(addTwoNumbers(2, 3))


const fun4 = () => ({ userName: "Nisha" }) //return an object implicitly
console.log(fun4());

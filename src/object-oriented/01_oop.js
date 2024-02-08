//1.  object literals

const user = {

    userName: "Nisha",
    signedIn: true,
    age: 21,

    getAllUserData: function () {
        console.log(this.userName, this.signedIn, this.age);
    }
}

// user.getAllUserData();



//2. Constructor function - we use new keyword to create a seperate instance
// e.g: const date = new Date()

function setUserData(name, age) {  //it is kind of constructor that create a new instance and set the properties

    this.name = name
    this.age = age

    this.greeting = () => {
        console.log(`Welcome ${this.name}`);
    }

    return this  //if we dont use return this then also it return implictly
}


//if we dont use new keyword here then userOne data will be overwrite by userTwo's data
const userOne = new setUserData("Nisha", 21);
const userTwo = new setUserData("Neha", 19)
// userOne.greeting()
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);  //it is denoting current context in this case [Function : setUserData]




const greet = () => {
    this.name = "nisha"
    console.log(this.name);  //print current context data in this case {name:"Nisha"}
}

greet();
//------------two way of defining an object
// 1. Singleton
const jsUser1 = Object.create({});
jsUser1.name = "Nisha"
// console.log("By Singleton - ", jsUser1);


// 2. Object Literals
const jsUser2 = {
    name: "Neha",
    age: 20,
    location: "Uttarakhand",
    isLoggedIn: false,
    lastLoggedIn: [0, 5]
}
// console.log("By Object Literals - ", jsUser2);


//-------------way of accessing object elements
// console.log(jsUser2.name);
// console.log(jsUser2["age"]);


//--------------update value-------
jsUser2.location = "Haryana";
// console.log(jsUser2);


//----------add a function-----------
jsUser2.greetingOne = function () {
    console.log("Good Morning")
}
jsUser2.greetingTwo = function () {
    console.log(`Good Morning ${this.name}`)
}

jsUser2.greetingOne();
jsUser2.greetingTwo()

// 1.Object.freeze() - for preventing update in an object
// Object.freeze(jsUser2);
// jsUser2.location = "Uttarakhand"
// console.log(jsUser2)
//=============Injecting custom method in prototype of array, string and Object(top-level object)

//define an array
const hero = ["spiderman", "ironman"]

//define an object
const heroPower = {
    spiderman: "web",
    ironman: "fly",

    getSpiderManPower: function () {
        console.log(`power of spiderman is ${this.spiderman}`)
    }
}

// heroPower.getSpiderManPower()

//injecting custom method in Object(parent(top-level) of all object)
Object.prototype.nisha = function () {
    console.log(`nisha is present everywhere`)
}

// heroPower.nisha()
// hero.nisha()


//injecting custom method in Array object
Array.prototype.heyHero = function () {
    console.log(`hii hero from array prototype`)
}

// hero.heyHero()
// heroPower.heyHero()  // error because heyHero method define in Array prototype not Object(parent/top-level) prototype


//injecting custom method in String object
// this method will available in all string in this page
String.prototype.trueLength = function () {
    console.log(this)  // [String: 'Nisha     ']
    console.log(`${this.trim().length}`) // 5
}

const myName = "Nisha     "
// myName.trueLength()  //5
// console.log(myName.length)  //10


function multiplyBy6() {
    console.log("function")
}

const fun1 = new multiplyBy6();
fun1.nisha()

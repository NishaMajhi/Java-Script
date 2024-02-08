//create object by singleton
const jsUser1 = new Object({
    id: "101",
    fullName: {
        firstName: "Nisha",
        lastName: "Majhi"
    },
    designation: "Full stack developer",
    skills: ["Node", "Express"]
})

// console.log(jsUser1["fullName"]["firstName"])
// console.log(jsUser1.fullName.firstName)


//-------------add objects using spread operator-------------
const jsUser2 = {
    id: "102",
    fullName: {
        firstName: "Neha",
        lastName: "Majhi"
    },
    designation: "Front developer",
    skills: ["React", "Redux"]
}
// console.log(jsUser2)

const studnet = {
    rollNo: 1,
    name: "Nisha Majhi",
    subject: ["Node", "Express"]
}

const addObjects = { ...jsUser2, ...studnet }
// console.log("add Objects", addObjects)


//-------------keys(), values(), entries()-------------------

// console.log(Object.keys(jsUser1));
Object.keys(jsUser1).forEach((key) => {
    // console.log(key)
})

// console.log(Object.values(jsUser1));
Object.values(jsUser1).forEach((value) => {
    // console.log(value)
})

// console.log(Object.entries(jsUser1));
Object.entries(jsUser1).forEach((entry) => {
    // console.log(entry)
})


//-----------hasOwnProperty() = to check property exists in the object---------------------
console.log("hasOwnProperty->", jsUser1.hasOwnProperty('i'));


//----------destructuring
const { id: userId } = jsUser1
// console.log(userId)
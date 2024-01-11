const emp1 = {
    name: "Nisha",
    salary: 2000000,
    gender: "Female"
}

emp1.gender = "Male"
// console.log(Object.getOwnPropertyDescriptor(emp1, "gender"));


//prevent modification in particular property of object
Object.defineProperty(emp1, "gender",
    {
        writable: false
    })

emp1.gender = "Female"  //now value wont change
// console.log(Object.getOwnPropertyDescriptor(emp1, "gender"));


for (const key in emp1) {
    // console.log(key, " : ", emp1[key]);
}


// Object.entries() -> it will make object, iterable as for-of works on iterable only(e.g:- array)
for (const [key, value] of Object.entries(emp1)) {
    // console.log(key, " : ", value);
}


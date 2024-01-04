//---------function creation------
function myName() {
    const name = "Nisha"
    console.log("Name : ", name)
}
//---------function execution-----------
// myName(); 



// function addTwoNumbers(a, b) {
//     console.log(a + b)
// }

function addTwoNumbers(a = 2, b = 3) {  //default parameters
    console.log(a + b)
}


// addTwoNumbers();
// addTwoNumbers(10, 29);


//--------function with object----------
const user = {
    name: "Nisha",
    id: 1
}

function handleObject(object1) {
    // console.log(`Name is : ${object1.name} and id id : ${object1.id}`);
}

handleObject(user)



//--------Rest(...) -> create a bucket who keep all the incoming values----
function calculateTotalPrice(...values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    return sum;
}

// console.log(calculateTotalPrice(2));
console.log(calculateTotalPrice(2, 3, 4, 5));
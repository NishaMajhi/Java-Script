// create promises

const promiseOne = new Promise((resolve, reject) => {
    //Do async task, network calls, database call, cryptography
    setTimeout(() => {
        console.log("Promise 1");
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("Successfully consumed promise 1");
})

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2");
        resolve();
    }, 1000)
}).then((res) => {
    console.log("Successfully consumed Promise 2");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 3");
        resolve({ name: "Nisha", email: "nisha@gmail.com" })
    }, 1000)
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

promiseFour = new Promise((resolve, reject) => {

    const flag = false;
    if (flag) {
        resolve({ name: "Nisha", password: "1234" })
    } else {
        reject("error in promise 4")
    }

}).then((result) => {
    console.log("result - ", result);
    const flag = false
    if (flag) {
        return result.name
    } else {
        return "Name not found"
    }
}).then((name) => {
    console.log("name - ", name);
}).catch((err) => {
    console.log(err);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Promise resolved or rejected");
})

//---------Promises with help of async/await instead of then/catch--------------
const promiseFive = new Promise((resolve, reject) => {
    const flag = true;
    if (flag) {
        resolve({ message: "Hello , Good Morning" })
    } else {
        reject("ERROR , oops!! Its afternoon")
    }
})

async function consumPromiseFive() {
    try {
        const result = await promiseFive
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

consumPromiseFive();


async function getAllUsers() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json()
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

getAllUsers();

//---------above task but help of then/catch
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
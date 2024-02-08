//=================Prototypal Inheritance===========
const user = {
    id: "1",
    name: "nisha",
    email: "nisha@gmail.com"
}

const channel = {
    isChannel: true
}

// channel.__proto__ = user
Object.setPrototypeOf(channel, user)
console.log(channel.id)  // 1

const teacher = {
    isteacher: true,
    __proto__: user
}

console.log(teacher)


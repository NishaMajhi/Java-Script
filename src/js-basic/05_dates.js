let dob = new Date()
// console.log(dob);
// console.log(dob.toString());  //Tue Oct 31 2023 12:06:33 GMT+0530 (India Standard Time)
// console.log(dob.toDateString());  //Tue Oct 31 2023
// console.log(dob.toLocaleDateString());   //31/10/2023
// console.log(dob.toLocaleString());   //31/10/2023, 12:06:33 pm


// console.log(dob.getTime());     //  get milisecond
// console.log(Math.floor((dob.getTime() / 1000)));  // get second

let newDate = Date(2023, 1, 23)  //month start from 0 
// console.log(newDate.toString());

const currentDate = new Date()
// console.log(currentDate);
// const futureDate = new Date()
// futureDate.setTime(currentDate.getTime())
// console.log("futureDate", futureDate);
// const fiveMinute = (5 * 60 * 1000)
// futureDate.setTime(currentDate.getTime() + fiveMinute)
// console.log("futureDate", futureDate);

// currentDate.setDate(21)
const eventDate = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`
console.log(eventDate);
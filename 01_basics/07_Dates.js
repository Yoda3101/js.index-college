// Dates

// node 01_basics/07_Dates.js

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 8, 18)
// let myCreatedDate = new Date(2024, 8, 18, 5, 3)
// let myCreatedDate = new Date("2024-09-18")
let myCreatedDate = new Date("09-18-2024")

// console.log(myCreatedDate.toLocaleString());

// TimeStamp

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDa(y) and the time}`

newDate.toLocaleString('default', {
    weekday: "long",

 })





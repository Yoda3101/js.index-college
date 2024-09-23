// console.log("I");
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("N");

function sayMyname (){
    console.log("I");
console.log("S");
console.log("H");
console.log("A");
console.log("N");
}

// sayMyname()

// node 03_basics/01_function.js

//  function addTwoNumbers (number1, number2){
//     console.log(number1 + number2);
    
//  }



function addTwoNumbers (number1, number2){
    // let result = (number1 + number2);
    // return result
    return number1 + number2
 }

 const result = addTwoNumbers(3, 5)
//  console.log("Result :", result);

function loginusermessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return  `${username} just logged in`
}
// console.log(loginusermessage());

 
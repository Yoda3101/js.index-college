// console.log("I");
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("N");

// function sayMyname (){
//     console.log("I");
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("N");
// }

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


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "ishan",
    price:199
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
} 

// handelObject(user)

handelObject({
    username:"sunny",
    price:399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

// var c = 300
// let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
     
}
// console.log(a);  
// console.log(b);
// console.log(c);

// node 03_basics/02_scope.js



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    //  two()
}
// one()

 if (true){
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
        }
        // console.log(website); // cant access it because the scope is closed
        
 }
//  console.log(username); // doesnt have scope here 
 
// ++++++++++++++++++ interesting +++++++++
console.log(addone(5));

function addone(num){ // function
    return num +1
}

 // you can call the function even before declaring the function in this 
 addTwo(5)
const addTwo = function(num){ // expresion (in this you cant call the function before declaring the function)
    return num +2
}

// hoisting
// Js object literal

const mySym = Symbol("key1")





const JsUser = {
    name:"ishan",
   [mySym]: "myKey1",
   "full name": "ishan Meshram",
    age :18,
    location:"Pune",
    email: "ishan@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","saturday"]
    // "full name": "ishan meshram"
}
// console.log(JsUser);

// node 02_basics/03_objects.js


// console.log(JsUser.name);
// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "ishan@chatGPT.com"
// Object.freeze(JsUser)
JsUser.email = "ishan@Microsoft.com"
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello Js user");
    
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



// Object constructor

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false
// console.log(tinderUser);

// node 02_basics/04_objects2.js

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Ishan",
            lastname: "Meshram"
        }
    }
}

// console.log(regularuser);

const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "a", 4: "b"}
const Obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign(Obj1, Obj2, Obj4)
// console.log(obj3);

const obj3 = {...Obj1, ...Obj2, ...Obj4}
// console.log(obj3);

const users = [
    {id: 1,
        email: "h@gmail.com"
    },
    {id: 1,
        email: "h@gmail.com"
    },
    {id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);








// const user = {
//     username :"Raghav",
//     price:999,

// WelcomeMessage: function() {
//     console.log(`${this.username} , Welcome to website `);
//     // console.log("this");
// }
// }
// // user.WelcomeMessage()
// // user.username = "shaiwal",
// // user.WelcomeMessage()
// console.log("this");


// function chai(){   //one way to define the function
//     let username = "Raghav"
//     console.log(this);
// }
// chai()
const chai = () =>{
    let username = "Raghav"
    console.log(this);

}
chai()

// () => {} arrow function syntax

// example
// const addTwo = (num1,num2) => { // Basic arrow function  //{ } curly bracket main rakha h toh return likna hoga
//     return  num1 + num2 //explicitly return mtlb return lgna pd rha h
// }
// const addTwo = (num1,num2) =>   num1 + num2  //implicit return means main maan leta hoon
// console.log(addTwo(3,4))

const addTwo = (num1,num2) =>   (num1 + num2)  //() bracket main return likna jururi ni h
console.log(addTwo(3,4))
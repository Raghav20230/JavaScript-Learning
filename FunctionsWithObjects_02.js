// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));//output=>2

/* - --------------------------Suppse humne 200rs,400,800rs ka saman liya phir ---------------------*/
// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,800));//output=>200
/*--------------Ab saari value print krne ke liye Rest operator or split operator use krte h ---------------*/
/*--------------Suppse humne 200rs,400,800rs ka saman liya phir ==========================*/
// function calculateCartPrice(num1){
//     return num1
// }
/* _________________________________________________________________________________________*/
//  function calculateCartPrice(...num1){ //rest operator or split operator
//      return num1
//  }
//  console.log(calculateCartPrice(200,400,800));//output=>200,400,600
/*Ab saari value print krne ke liye Rest operator or split operator use krte h */
/*Suppse humne 200rs,400,800rs ka saman liya phir */
 /* --------------- suppose val 1, val 2 pass kiya jye toh-----------------*/
//  function calculateCartPrice(val1,val2,...num1){ //another case value pass
//     return num1
// }
// console.log(calculateCartPrice(200,400,800));//output=>800 array ke ander sirf 800 ayega baki val1,2 main chala gaya 
/* ##################################################  */
// const user = { // making object 
//     username :"Raghav Singh",
//     price:199

// }
// function handleObject(anyobject){
// console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// //  handleObject(user) // direct object bhe pass kr sakte h 
// handleObject({
//     username:"Pandey",
//     price : 399
// })
/* *****************arrays bhe pass kr sakte h aise hi */
// const myNewArray = [ 100,200,300,800]
// function returnSecondValue(getArray){
//     return getArray
// }
// console.log(returnSecondValue(myNewArray));//output=>100,200,300,800

// second type array gave
const myNewArray = [ 100,200,300,800]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200,100,300,800]));//output=>100
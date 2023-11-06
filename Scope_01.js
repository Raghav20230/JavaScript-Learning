// var c = 300 // global scope

// if(true){    // starring Block scope..
//   let a = 10
// const b =20
// var c = 30  
// }            //end block scope   

// // console.log(a); // a is not defined
// // console.log(b); // b is not defined
// console.log(c);
/* -------------------------------------------------------------------------------*/
function one(){
  const username = "Raghav"
}
function two(){
  const website = "youtube"
  // console.log(website);
  two()
}
// one()
if(true){
  const username = "Raghav"
  if (username =="Raghav"){
    const website = " youtube"
   console.log(username + website);
}
console.log(website);
}
console.log(username);
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
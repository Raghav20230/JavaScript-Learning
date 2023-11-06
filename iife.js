// Immediately Invoked Function Expressions IIFE
// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// (function chai(){  // SECOND WAY TO CONNECT DB CONNECTED 
//     console.log(`DB CONNECTED`);
// })()

// Syntax TO REMEMBER:()()
// INTERVIEW QUESTION:WHAT IS IIFE =>GLOBAL SCOPE KE POLLUTION SE PROBLEM HOTI H KHI BAAR TOH US GLOBAL SCOPE KE VARIABLE YA JO BHE DECLARTION H USKE POLLUTION KO HTNE KE LIYE IIFE USE HOTA H

( () =>{
    console.log(`DB CONNECTED`);
})();
( () =>{
    console.log(`DB CONNECTED TWO`);
})("RAGHAV")
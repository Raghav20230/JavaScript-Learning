//for
// for( let i =1 ; i<=10 ; i++){
//     console.log(i);
// }
//knowing loop concept
// for(i = 0; i <= 10; i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }
//print 0 and 1 value 
// for(let i = 0;i <=10;i++){
//     console.log(`Outer loop value: ${i}`);
//     for(let j = 0; j <= 10; j++){
//         console.log(`Inner loop value ${j} and Outer loop ${i}`);
//     }
// }
// print table
// for(let i = 0; i <= 10; i++){
//     console.log(`Outer loop value:${i} `);
//     for(let j = 1; j<= 10; j++){
//         console.log(i + `*` + j + `=` +i*j);
//     }
// }

//Add Array in Loop
// let myArray = ["Flash","Batman","Spiderman","hulk"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//Break and Continue 
// for (let index = 1; index <= 20; index++) {  // output value of index is 1,2,3,4,Detected 5 , value of index is 5 and so on
//     if(index == 5){
//         console.log(`Detected 5`);
//     }
//      console.log(`value of index is ${index}`);
// }

// for (let index = 1; index <= 20; index++) {                
//     if(index == 5){
//         console.log(`Detected 5`);
//         break
//     }
//      console.log(`value of index is ${index}`);
// }
// output=>
// value of index is 1
// value of index is 2
// value of index is 3
// value of index is 4
// Detected 5

//Continue 

for (let index = 1; index <= 20; index++) {                
    if(index == 5){
        console.log(`Detected 5`);
        continue
    }
     console.log(`value of index is ${index}`);
}//output
// /usr/local/bin/node ./Loop_iteration.js
// value of index is 1
// value of index is 2
// value of index is 3
// value of index is 4
// Detected 5
// value of index is 6
// value of index is 7
// value of index is 8
// value of index is 9
// value of index is 10
// value of index is 11
// value of index is 12
// value of index is 13
// value of index is 14
// value of index is 15
// value of index is 16
// value of index is 17
// value of index is 18
// value of index is 19
// value of index is 20




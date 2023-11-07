//if
// if(Condition){
// }
// if(true){

// }

// 2<2 // 2 chota h 2 se ? false
// 2<=2 // 2 barbar h 2 s2 true
// = operator assignment 
// == to check value is equal or not
// if(2 == "2"){
//     console.log("Excuted");
// }output- Excuted
// != kya 2 ,2 ke barbar ni h 
// for ex: 3 != 2 True
// === strict equal
// if(2 ==="2"){
//      console.log("Excuted");
//  }  //no  output 
// if(!2 ===!2){
//     console.log("Excuted");
// }//Excuted
// != ulti checking krta h 
// if(2!=3){ //  2 ni h equal to 3 ka ?
//     console.log("Excuted");//Excuted  ha ni h equal
// }

// const score = 200
// if(score > 100){
//    var power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// //short hand notation
// const balance = 500
// if(balance > 100) console.log("test"); //implicit scope ki maan liya scope h


/*SWITCH CASE*/
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



// const month = 3
// switch (month) {
//     case 1:
//         console.log("jan");
//         break;

//     case 2:
//         console.log("Feb");
//         break;

//     case 3:
//         console.log("March");
//         break;

//     case 4:
//         console.log("Aprail");
//         break;

//     default:
//         console.log("default case match")
//         break;
// }

/* falsy values */
// false,0,BigInt 0n,-0,"", null,undefined,NaN(Not a Number)

/* truthy values */
//"0",'false'," ",[],{},function(){}

                         /* nullish coalescing operator(??): work krta h  :null undefined */
                        //  let val1;
                        //  val1 = 5 ?? 10 //output - 5
                        //  val1 = null ?? 10 //output -10
                        // val1 = undefined ?? 15 //output 15
                        // val1 = null ?? 10 ?? 15/output 10
                        //  console.log(val1);


                        /* Ternary Operator */
                        // condition ? true : false

                        const iceCreamPrice = 100
            iceCreamPrice <= 80 ? console.log("less than 80" ) : console.log("more than 80")
    

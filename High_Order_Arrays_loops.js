//for of
// const arr =[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }//output
// /usr/local/bin/node ./High_Order_Arrays_loops.js
// 1
// 2
// 3
// 4
// 5


// const greeting = "hell0 world!"
// for (const greet of greeting) {
// console.log(`Each and Every sab ke sab chor h sale ${greet}`)    
// }//output
// /usr/local/bin/node ./High_Order_Arrays_loops.js
// Each and Every sab ke sab chor h sale h
// Each and Every sab ke sab chor h sale e
// Each and Every sab ke sab chor h sale l
// Each and Every sab ke sab chor h sale l
// Each and Every sab ke sab chor h sale 0
// Each and Every sab ke sab chor h sale
// Each and Every sab ke sab chor h sale w
// Each and Every sab ke sab chor h sale o
// Each and Every sab ke sab chor h sale r
// Each and Every sab ke sab chor h sale l
// Each and Every sab ke sab chor h sale d
// Each and Every sab ke sab chor h sale !

//maps
// const map = new Map()
// map.set('IN',"INDIA")
// map.set('USA',"UNITED STATE OF AMERICA")
// map.set('FR',"France")
// map.set('IN',"INDIA")//map unique value ke liye jane jate h
//output:
// /usr/local/bin/node ./High_Order_Arrays_loops.js
// Map(3) {size: 3, IN => INDIA, USA => UNITED STA…F AMERICA, FR => France}

// console.log(map);
// for (const key of map) {
// //     console.log(key);
// // }//output
// // /usr/local/bin/node ./High_Order_Arrays_loops.js
// // (2) ['IN', 'INDIA']
// // (2) ['USA', 'UNITED STATE OF AMERICA']
// // (2) ['FR', 'France']


// for (const [key,value] of map) {
//     console.log(key,':-', value);
// }//output

// const coding = ["js","ruby","java","python","cpp"]
// coding.forEach(function (val){ 
//     console.log(val); 
// })
const marvel_heros =["ironman","spiderman","thor","loki"]
const dc_heros = ["Batman","Superman","wonder","Flash"]
// marvel_heros.push(dc_heros)
// marvel_heros.concat(" ",dc_heros);
// console.log(marvel_heros);
// const allHeros =marvel_heros.concat(dc_heros)
// console.log(allHeros);
// const all_superhers = [...marvel_heros,...dc_heros]
// console.log(all_superhers)//split all the vales in a single row 
// console.log(Array.isArray('Raghav'))//False
// console.log(Array.from("Raghav"))//['R' ,'a' ,'g' ,'h'  ,'a' ,'v'] 
// console.log(Array.from({name : "Raghav"}))//output => [], intersting 


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));//output => [100,200,300]
                            //   Array.from()=>
// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// console.log(Array.from('foo'));
                                 // Expected output: Array ["f", "o", "o"]
// console.log(Array.from([1, 2, 3], (x) => x + x));
                                   // Expected output: Array [2, 4, 6]

                           //    Array.isArray()
// The Array.isArray() static method determines whether the passed value is an Array.
            //   console.log(Array.isArray([1, 3, 5]));// Expected output: true


            // console.log(Array.isArray(new Int16Array([15, 33])));
            // Expected output: false
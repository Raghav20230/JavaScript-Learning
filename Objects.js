const mySym = Symbol("key1")//interviewq=>ek symobol lo aur usse object main add kr ke dikho  /symbol ko use krna h as a key toh direct use ni kr sakte 

const jsUser = {
    name :"Raghav",
    "Full name" : "Raghav Singh",//is value ko koi tarika ni h dot se access kr paye toh kaise possible h
    age : 18,
   [ mySym]:"mykey1",//syntax to define [] mysum bcz type of is change in string
    location :"pilibht",
    email :"singhraghvendra.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
} // this is called Object 
// console.log(jsUser.email)//dot laga kr toh object ko access kr sakte h but without dot value not possible
// console.log(jsUser[email]) // name behind main string ke jaisa track kra ja rha h is liye aise likhne main error ayega
// console.log(jsUser["email"])//[" bhdjcdjj"] this type value is accesible
// console.log(jsUser[Full name]) // they showing erroe with out using " Full name"
// console.log( jsUser[mySym])
jsUser.email = "Raju@1123.com"
// console.log(jsUser);
//object.freeze(jsUser)//freeze the whole value for no changes
jsUser.greeting = function(){
    console.log("Hello js Users");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js Users,${this.name}`);
}
 console.log(jsUser.greeting());  
 console.log(jsUser.greetingTwo());

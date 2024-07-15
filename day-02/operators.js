// arithmetic operations 
console.log("arithmetic operations");
let a = 8
let b = 2
let c = a + b 
console.log(` ${a}+${b} result is= ${c}`); // addition 
let d = a - b 
console.log(` ${a}-${b} result is= ${d}`); //subtraction 
let e = a * b 
console.log(` ${a}*${b} result is= ${e}`); //multiplication 
let f = a / b 
console.log(` ${a}/${b} result is= ${f}`); //divison

let m = 7 
let n = 2
let o = m % n 
console.log(` ${m}%${n} result is= ${o}`); //reminder 

// assignment operators
console.log("assignment operators");
let one = 6
let two = 3
one += two 
console.log(`value is ${one} `);

one -= two 
console.log(`value is ${one} `);

// comparison operators
console.log("comparison operators");
let p = 29
let q = 53
console.log(`${p} > ${q}`, p>q );
console.log(`${p} <${q}`, p<q );
console.log(`${p} >= ${q}`, p>=q );
console.log(`${p} <= ${q}`, p<=q );

let value1 = 50 
let value2 = 51
console.log(`${value1} == ${value2}`, value1==value2);

// Double equals (==) will perform a type conversion when comparing two things, 
//and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0);

console.log(`${value1} === ${value2}`, value1===value2);
// Triple equals (===) will do the same comparison as double equals 
//(including the special handling for NaN, -0, and +0) but without type conversion;
// if the types differ, false is returned

// logical operator
console.log("logical operator");
console.log("&& operators");
if (value1==value2 && p==q) {
    console.log("result is",true);
}
else{
    console.log("result is",false);
}

console.log("|| operators");
if (value1< value2 || p==q) {
    console.log("result is",true);
}
else{
    console.log("result is",false);
}
console.log("! logical NOT");
let k = !true
console.log(`it returns ${k}`);

 //ternary operator 

 let age = 17
const limit = age <18 ? "can't vote" : "can vote"
console.log(limit);





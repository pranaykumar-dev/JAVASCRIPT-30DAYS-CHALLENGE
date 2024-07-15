// control statements 
// if-else statements

i = 8 // check if the number is positive, negative, or zero
if (i<=0) {
    console.log("its negative");
    
}
else{
    console.log("its postive");
}

// check if the person is eligible to vote (if-else)
age=19
if (age <=18) {
    console.log("Not eligible");
}
else{
    console.log("eligible to vote");
}

// nested if-else statements
let a = 10
let b = 5
let c = 12
if (a >b && a > c) {
    console.log("A is greater");
    
} else if (b > c && b > a){
    console.log("B is greater");

} else{
    console.log("C is greatest");
}

// SWITCH CASE
let week = 5
switch (week) {
    case 1:
        console.log("monday");
        
        break;
    case 2:
        console.log("tuesday");
            
        break;
    case 3:
        console.log("wednesday");
            
        break;
    case 4:
        console.log("thrusday");
            
        break;
    case 5:
        console.log("friday");
            
        break;
    case 6:
        console.log("saturday");
            
        break;
    case 7:
        console.log("sunday");
            
        break;

    default:
        console.log("out of world");
        break;
}

// switch case to find GRADE

const mark = 80
switch (mark) {
    case 90:
        console.log("A");  
        break;
    case 80:
        console.log("B");  
        break;
    case 70:
        console.log("C");  
        break;
    case 60:
        console.log("D");  
        break;
    case 50:
        console.log("D+");  
        break;

    default:
        console.log("FAIL");
        break;
}

// TERNARY Operator
const value = 2
const output = value % 2 ===0 ? "even" : "odd"
console.log(output);

// combining conditions 

const year = 2000
if((year %4 ===0 && year % 100 !=0 ) || year % 400 ===0 ){
    console.log(year,"leap year");
}else {
    console.log("not leap year");
}
// for loop repeats until a specified condition evaluates to false. 
//The JavaScript for loop is similar to the Java and C for loop.
// to find the numbers from 1 to 10 

for (let index = 1; index <= 10; index++) {
    console.log(index);
    
}
// to find multiple of 5 
console.log("to find multiple of 5");   
for (let index = 1; index < 10; index++) {
    console.log(5*index );
    index+1
    
}
console.log("sum of ");
value = 0
counter = 1
while(counter<=10){
    value += counter
    counter++
    console.log("sum is ",value)
}
i = 10
while(i>=1){
    console.log(i);
    i-=1

}

i = 1
console.log("do while Loop");
do {
    console.log(i);
    i+=1
} while (i<=5);

 console.log("factorial");
 let number = 5
 let ina =0
 do {
    let mul = number * ina
    number--
    ina++
    // console.log(ina);
    console.log(mul);
    
 } while (number >ina);

 console.log("pattern");

 let n = 5

 for (let row = 1; row <= n; row++) {
    let pattern = '';

for (let col = 1; col <= row; col++) {
        pattern += '* ';
    }
    console.log(pattern);   
 }
 
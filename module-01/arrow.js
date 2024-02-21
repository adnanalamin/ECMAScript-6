// Function Declaration

// function add(a,b){
//     const result = a + b;
//     return result;
// }
function add(a,b){
    return a + b;
}

// function Expression some times it's call anonymous function

const add2 = function(a,b){
    return a + b;
}

// Arrow Function

const add3 = (a,b) => a + b ;
const add4 = (num1,num2,num3,num4) => num1 + num2 + num3 + num4;


const multiply = (num1,num2) => num1 * num2;



// const sum = add3(95,5);
// const sum = add4(70,5,10,15);
// console.log(sum);

const multi = multiply(3,12);
console.log(multi);
// 8 ways to get undefined


// Number - 01
let age;
// console.log(age);


// Number - 02
function sum(a,b){
    const total = a+b;
}
const result = sum(3,4);
// console.log(result);


// Number - 03
function third(a,b,c,d){
    const total = a + b + c + d;
    // console.log(a,b,c,d);
}
third(3,5);

// Number - 04

function fourth(a,b){
    if(a < 0 || b < 0){
        return
    }
    return a+b;
}
const result2 = fourth(3,-5);
// console.log(result2);

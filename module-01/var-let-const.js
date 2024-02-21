// Var = No reason to used
// let = Allow it to reassign
// const = Do not allow it to reassign


const money = 25;
//money = 50;
const rich = money + 25;
console.log(rich);


let count = 0;
count = count + 10;
console.log(count)

const number = [23,4,23,12,56,22];
// number = [4,5,7,7];
number[1] = 55;
number.push(8,9,65);
console.log(number);

// Object

const student = {
    name: "Moyna Pakhi",
    class: 12
}
// student = {name:"kolil konthi"}
student.name = "Moyor Konthi";
console.log(student);


// Loop
let num = 0;
for(let i = 0; i < 10; i++){
    const count = i;
    num = num + count;
}
console.log(num);
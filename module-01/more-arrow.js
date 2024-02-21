const difference = (x, y) => x - y;
const multiply = (num1, num2, num3) => num1 * num2 * num3;

// Single parameter or one parameter

const getAge = (person) => person.age;
const student = { name: "ananata", age: 45 };
const age = getAge(student);
console.log(age);

const getThird = (number) => number[2];

const third = getThird([2, 45, 99, 4, 32, 56]);
console.log(third);

const doubleIt = (num) => num * 2;

// No parameter
const getPi = () => Math.PI;
console.log(getPi());

// Large Arrow Function

const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mult = x * y * z;
};

const actor = {
  name: "Ananta",
  age: 30,
  phone: "01935208522",
  money: 123456789876,
};

const { phone, age: boyos } = actor;

// const phone = actor.phone;
// const age = actor.age;
// const name = actor.name;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(boyos);
console.log(boyos);
console.log(boyos);
console.log(boyos);
console.log(boyos);
console.log(boyos);

// Array Destructuring

const numbers = [12, 88];
const [first, second] = numbers;
console.log(first, second);
const [x, y] = [33, 66];
console.log(x);
console.log(y);

// Advance

function doubleThem(a, b) {
  return [a * 2, b * 2];
}
const [prothom, ditiyo] = doubleThem(6, 8);
console.log(prothom);
console.log(ditiyo);


// Swap

const num4 = 12;
const num5 = 24;

const [num6,num7]=[num5,num4];
console.log(num6)
console.log(num7)

const number = [12, 10, 13, 45, 13, 9];

const double = number.map((num) => num * 2);
// console.log(double);

const fiveAdded = number.map((num) => num + 5);
// console.log(fiveAdded);

const haves = number.map((num) => num / 2);
// console.log(haves)

const friends = ["dnan", "tom", "jhon", "oliver", "bonna"];
const lenght = friends.map(name => name.length);
console.log(lenght)


const firstLetter = friends.map(fri => fri[0].toUpperCase());
console.log(firstLetter);

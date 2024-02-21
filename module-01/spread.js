const max = Math.max(23,24,11,45,76,43,1,99);
// console.log(max)

const numbers = [43,45,23,55,67,89,65,32,55,99];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);


// Used Spread operator to copy
const friends = [22,34,56,32,52,12,99];
const bondhu = friends;
const dosto = [...friends]
friends.push(100);
console.log(dosto);
console.log(friends);


//Advance
const shonkha = [...friends,9999];
console.log(shonkha)

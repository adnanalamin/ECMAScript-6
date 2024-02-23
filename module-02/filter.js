const number = [12, 10, 13, 45, 13, 9];
const player = [72,64,67,59,55,75];
// const selected = player.filter(p => p > 70);
// const selected = player.filter(p => p > 80);
const selected = player.filter(p => p % 2 === 1);
console.log(selected)


const friends = ["adnan", "tom", "jhon", "oliver", "bonna"];
const findFriend = friends.filter(p => p.length % 2 === 0);
console.log(findFriend);
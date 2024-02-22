const glass = {
    name: 'Glass',
    color: 'Golden',
    price: 12,
    isCleaned: true
}

// console.log(glass)

const keys = Object.keys(glass);
console.log(keys);


const values = Object.values(glass);
console.log(values);


const entrise = Object.entries(glass);
console.log(entrise);


delete glass.isCleaned;
console.log(glass)
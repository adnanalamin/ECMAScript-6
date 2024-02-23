const products = [
  { id: 1, name: "Lenovo", price: 65000 },
  { id: 2, name: "Dell", price: 45000 },
  { id: 3, name: "HP", price: 75000 },
  { id: 4, name: "Asus", price: 85000 },
  { id: 5, name: "Mac", price: 185000 },
];

const productName = products.map(name => name.name);
// console.log(productName);
const productPrice = products.map(price => price.price);
// console.log(productPrice);


// Usign forEcah
// products.forEach(id => console.log(id.id));


const productsName2 = products.filter(p => p.price > 50000);
// console.log(productsName2);

// Affordable
const affordable = products.find(p => p.price > 50000);
console.log(affordable)

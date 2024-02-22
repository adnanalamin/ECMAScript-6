// Data Access
const data = [{ id: 1, name: "Abud", address: "kochu khet" }];
// console.log(data[0].address);

const product = {
  count: 5000,
  data: [
    { id: 1, name: "Lenevo Laptop", price: 65000 },
    { id: 2, name: "MacBook", price: 165000 },
  ],
};

// console second object price

const laptopPrice = product.data[1].price;
console.log(laptopPrice);

const user = {
  id: 5001,
  name: "Shoriful Raj",
  address: {
    street: {
      first: "54/1 uttor side",
      second: "Poribag ar goli",
      third: "No dorai",
    },
    city: "Dhaka",
  },
};

const user2 = {
    id: 5002,
    name: 'Pori Bibir Majar',
    address:{
        city: 'Cittagong',
        country: 'Bangladesh'

    }
}
console.log(user.address.street.second);
console.log(user2.address.street?.second);

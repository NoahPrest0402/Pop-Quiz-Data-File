const fs = require("fs");
data = fs.readFileSync("data.json");
data = JSON.parse(data)

customers = data.customers
gadgets = data.gadgets

console.log(customers);
console.log(gadgets)
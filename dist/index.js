"use strict";
// Задание 1
function calculateTotal(price, quantity, discount = 0) {
    return price * quantity - discount;
}
console.log(calculateTotal(500, 3));
console.log(calculateTotal(500, 3, 100));
// Задание 2
let id = "user123";
function displayId(id) {
    if (typeof id === "string") {
        console.log(`ID: ${id.toUpperCase()}`);
    }
    else {
        console.log(`ID: ${id * 10}`);
    }
}
displayId(id);
id = 123;
displayId(id);
const orders = [
    {
        orderId: "ORD-001",
        amount: 1200,
        status: "pending"
    },
    {
        orderId: "ORD-002",
        amount: 2500,
        status: "shipped"
    },
    {
        orderId: "ORD-003",
        amount: 1800,
        status: "delivered"
    },
    {
        orderId: "ORD-004",
        amount: 900,
        status: "pending"
    }
];
function filterOrdersByStatus(orders, status) {
    return orders.filter((order) => order.status === status);
}
console.log(filterOrdersByStatus(orders, "pending"));
// Задание 4
const productInfo = [
    "Laptop",
    1500,
    5
];
const inventory = {
    Laptop: 10,
    Phone: 20
};
function updateStock(inventory, productInfo) {
    const productName = productInfo[0];
    const quantityChange = productInfo[2];
    if (inventory[productName] !== undefined) {
        inventory[productName] += quantityChange;
    }
    else {
        inventory[productName] = quantityChange;
    }
    return inventory;
}
console.log(updateStock(inventory, productInfo));
//# sourceMappingURL=index.js.map
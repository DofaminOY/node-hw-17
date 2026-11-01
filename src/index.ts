// Задание 1

function calculateTotal(
    price: number,
    quantity: number,
    discount: number = 0
): number {
    return price * quantity - discount;
}

console.log(calculateTotal(500, 3));
console.log(calculateTotal(500, 3, 100));


// Задание 2

let id: string | number = "user123";

function displayId(id: string | number): void {
    if (typeof id === "string") {
        console.log(`ID: ${id.toUpperCase()}`);
    } else {
        console.log(`ID: ${id * 10}`);
    }
}

displayId(id);

id = 123;

displayId(id);


// Задание 3

type OrderStatus = "pending" | "shipped" | "delivered";

interface Order {
    orderId: string;
    amount: number;
    status: OrderStatus;
}

const orders: Order[] = [
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

function filterOrdersByStatus(
    orders: Order[],
    status: OrderStatus
): Order[] {
    return orders.filter((order) => order.status === status);
}

console.log(filterOrdersByStatus(orders, "pending"));


// Задание 4

const productInfo: [string, number, number] = [
    "Laptop",
    1500,
    5
];

interface Inventory {
    [productName: string]: number;
}

const inventory: Inventory = {
    Laptop: 10,
    Phone: 20
};

function updateStock(
    inventory: Inventory,
    productInfo: [string, number, number]
): Inventory {
    const productName = productInfo[0];
    const quantityChange = productInfo[2];

    if (inventory[productName] !== undefined) {
        inventory[productName] += quantityChange;
    } else {
        inventory[productName] = quantityChange;
    }

    return inventory;
}

console.log(updateStock(inventory, productInfo));
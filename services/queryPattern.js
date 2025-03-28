import mockDB from "../services/database.js";

export const queryPatterns = new Map([
  [
    "show all employees",
    {
      sql: "SELECT * FROM employees;",
      execute: () => mockDB.employees,
    },
  ],
  [
    "find user orders",
    {
      sql: "SELECT * FROM orders;",
      execute: () => mockDB.orders,
    },
  ],
  [
    "total sales",
    {
      sql: "SELECT SUM(amount) AS total FROM orders;",
      execute: () => [
        { total: mockDB.orders.reduce((sum, order) => sum + order.amount, 0) },
      ],
    },
  ],
  [
    "show all products",
    {
      sql: "SELECT * FROM products;",
      execute: () => mockDB.products,
    },
  ],
  [
    "list categories",
    {
      sql: "SELECT DISTINCT category FROM products;",
      execute: () => [
        ...new Set(mockDB.products.map((product) => product.category)),
      ],
    },
  ],
  [
    "completed orders",
    {
      sql: "SELECT * FROM orders WHERE status = 'completed';",
      execute: () =>
        mockDB.orders.filter((order) => order.status === "completed"),
    },
  ],
  [
    "pending orders",
    {
      sql: "SELECT * FROM orders WHERE status = 'pending';",
      execute: () =>
        mockDB.orders.filter((order) => order.status === "pending"),
    },
  ],
  [
    "cancelled orders",
    {
      sql: "SELECT * FROM orders WHERE status = 'cancelled';",
      execute: () =>
        mockDB.orders.filter((order) => order.status === "cancelled"),
    },
  ],
  [
    "electronics products",
    {
      sql: "SELECT * FROM products WHERE category = 'Electronics';",
      execute: () =>
        mockDB.products.filter((product) => product.category === "Electronics"),
    },
  ],
  [
    "furniture products",
    {
      sql: "SELECT * FROM products WHERE category = 'Furniture';",
      execute: () =>
        mockDB.products.filter((product) => product.category === "Furniture"),
    },
  ],
  [
    "low stock products",
    {
      sql: "SELECT * FROM products WHERE stock < 30;",
      execute: () => mockDB.products.filter((product) => product.stock < 30),
    },
  ],
  [
    "expensive products",
    {
      sql: "SELECT * FROM products WHERE price > 500;",
      execute: () => mockDB.products.filter((product) => product.price > 500),
    },
  ],
]);

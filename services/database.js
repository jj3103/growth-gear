const mockDB = {
  employees: [
    { id: 1, name: "John Doe", role: "Engineer", salary: 7000 },
    { id: 2, name: "Jayesh", role: "Manager", salary: 9000 },
    { id: 3, name: "Dhruv", role: "Dveloper", salary: 15000 },
    { id: 4, name: "Vikas", role: "Engineer", salary: 8000 },
  ],
  orders: [
    { id: 1, userId: 1, amount: 100, status: "completed", date: "2023-06-01" },
    { id: 2, userId: 2, amount: 200, status: "completed", date: "2023-06-15" },
    { id: 3, userId: 1, amount: 150, status: "pending", date: "2023-07-01" },
    { id: 4, userId: 4, amount: 300, status: "completed", date: "2023-07-15" },
  ],
  products: [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", stock: 50 },
    {
      id: 2,
      name: "Smartphone",
      price: 699,
      category: "Electronics",
      stock: 100,
    },
    {
      id: 3,
      name: "Headphones",
      price: 199,
      category: "Electronics",
      stock: 150,
    },
    { id: 4, name: "Desk Chair", price: 299, category: "Furniture", stock: 30 },
  ],
};

export default mockDB;

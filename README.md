# 🚀 Query Execution API

A Node.js-based API for executing predefined queries and returning structured results.

---

## 📋 Features

✅ Execute predefined queries  
✅ Validate query structure  
✅ Convert natural language queries to SQL  
✅ RESTful API with JSON responses  
✅ Token-based authentication

## 🛠 API Documentation

### 🔹 Validate Query

- **Method:** `POST`
- **Endpoint:** `/api/explain`
- **Description:** Validate the query either the structure of query is correct or not.
- **Request Body:**

```json
{
  "query": "show all employees"
}
```

- **Response Body:**

```json
{
  "valid": true,
  "message": "Query Structure is correct"
}
```

### Execute Query

- **Method:** `POST`
- **Endpoint:** `/api/query`
- **Description:** Execute the query and return the response.
- **Request Body:**

```json
{
  "query": "show all employees"
}
```

- **Response Body:**

```json
{
   {
        "id": 1,
        "name": "John Doe",
        "role": "Engineer",
        "salary": 7000
    },
    {
        "id": 2,
        "name": "Jayesh",
        "role": "Manager",
        "salary": 9000
    },
    {
        "id": 3,
        "name": "Dhruv",
        "role": "Dveloper",
        "salary": 15000
    },
    {
        "id": 4,
        "name": "Vikas",
        "role": "Engineer",
        "salary": 8000
    }
}
```

### 🔹 Explain Query

- **Method:** `POST`
- **Endpoint:** `/api/explain`
- **Description:** Converts a natural language query into an SQL-like format.
- **Request Body:**

```json
{
  "query": "total sales"
}
```

- **Response Body:**

```json
{
  "naturalQuery": "total sales",
  "sqlQuery": "SELECT SUM(amount) AS total FROM orders"
}
```

## 📮 Import Postman Collection

To test the API in **Postman**, import the collection by following these steps:

1. Download the Postman collection:  
   👉 **[Postman Collection](./GrowthGear.postman_collection.json)**

2. Open Postman and go to **File → Import**.
3. Select the downloaded `GrowthGear.postman_collection.json` file.
4. Start testing the API! 🚀

## 🔧 Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/jj3103/growth-gear
cd your-repo
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Configure Environment Variables

```sh
PORT=5000
JWT_SECRET=your-secret-key
```

### 4️⃣ Start the Server

```sh
npm run dev
```

## 📞 Contact Information

If you have any questions, feel free to reach out:

- **Developer:** Jayesh Jain
- **Email:** [jainjayesh2003@gmail.com]
- **LinkedIn:** [https://www.linkedin.com/in/jayesh-jain-8b65bb188/]

Feel free to contribute or report issues in the repository! 🚀

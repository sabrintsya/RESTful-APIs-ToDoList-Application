# 📝 TODO List API with Authentication (Login & Register)

A RESTful API built with **Node.js** and **Express.js** that provides user authentication (login & registration) and personal task management. Authentication is handled using **JWT (JSON Web Tokens)**.

---

## 📌 Table of Contents

1. [🚀 Installation & Setup](#-installation--setup)
2. [🔐 Authentication](#-authentication)
   - [📝 Register](#-register)
   - [🔑 Login](#-login)
3. [✅ TODO Management](#-todo-management)
   - [➕ Create TODO](#-create-todo)
   - [📋 Get TODO List](#-get-todo-list)
   - [🔍 Get Single TODO](#-get-single-todo)
   - [✏️ Update TODO](#-update-todo)
   - [🗑️ Delete TODO](#-delete-todo)
   - [🗑️ Delete All TODOs](#-delete-all-todos)

---

## 🚀 Installation & Setup

### ⚡ Prerequisites
- **Node.js** and **npm** installed on your machine
- A **MongoDB** database (or any other database) for storing user and to-do data

### 📥 Steps

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/todo-api.git
```

#### 2️⃣ Install Dependencies
```bash
npm install
```

#### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and set the following variables:
```bash
PORT=3000
JWT_KEY=your_JWT_KEY
DB_URL=your_mongodb_url
```

#### 4️⃣ Run the Application
```bash
npm start
```

#### 5️⃣ Access the API
```bash
http://localhost:3000/todos
```

---

## 🔐 Authentication

### 📝 Register
- **Endpoint:** `POST /api/auth/register`
- **Description:** Registers a new user.
- **Request Body:**
```json
{
    "email": "example@example.com",
    "password": "password123"
}
```
- **Response:**
  - ✅ `201 Created`
  ```json
  {
      "message": "Successfully registered"
  }
  ```
  - ❌ `400 Bad Request`
  ```json
  {
      "message": "Email already registered"
  }
  ```

### 🔑 Login
- **Endpoint:** `POST /api/auth/login`
- **Description:** Logs in a user.
- **Request Body:**
```json
{
    "email": "example@example.com",
    "password": "password123"
}
```
- **Response:**
  - ✅ `200 OK`
  ```json
  {
      "message": "Successfully logged in"
  }
  ```
  - ❌ `404 Not Found`
  ```json
  {
      "message": "Email not registered"
  }
  ```
  - ❌ `401 Unauthorized`
  ```json
  {
      "message": "Incorrect password"
  }
  ```

---

## ✅ TODO Management

### 📋 Get TODO List
- **Endpoint:** `GET /api/todos`
- **Description:** Retrieve all to-do items.
- **Response:**
  ```json
  {
      "message": "Todos retrieved successfully",
      "data": []
  }
  ```

### ➕ Create TODO
- **Endpoint:** `POST /api/todos`
- **Description:** Create a new to-do item.
- **Request Body:**
```json
{
    "title": "Task title",
    "description": "Task description",
    "completed": false  
}
```
- **Response:**
  ```json
  {
      "message": "Todo added successfully"
  }
  ```

### 🔍 Get Single TODO
- **Endpoint:** `GET /api/todos/{id}`
- **Description:** Retrieve a single to-do item.
- **Response:**
  - ✅ `200 OK`
  ```json
  {
      "message": "Todo found",
      "data": {}
  }
  ```
  - ❌ `404 Not Found`
  ```json
  {
      "message": "Todo not found"
  }
  ```

### ✏️ Update TODO
- **Endpoint:** `PUT /api/todos/{id}`
- **Description:** Update an existing to-do item.
- **Request Body:**
```json
{
    "title": "Updated title",
    "description": "Updated description",
    "completed": true
}
```
- **Response:**
  - ✅ `200 OK`
  ```json
  {
      "message": "Todo updated successfully",
      "data": {}
  }
  ```
  - ❌ `404 Not Found`
  ```json
  {
      "message": "Todo not found"
  }
  ```

### 🗑️ Delete TODO
- **Endpoint:** `DELETE /api/todos/{id}`
- **Description:** Delete a specific to-do item.
- **Response:**
  - ✅ `200 OK`
  ```json
  {
      "message": "Todo deleted successfully"
  }
  ```
  - ❌ `404 Not Found`
  ```json
  {
      "message": "Todo not found"
  }
  ```

### 🗑️ Delete All TODOs
- **Endpoint:** `DELETE /api/todos`
- **Description:** Delete all to-do items.
- **Response:**
  ```json
  {
      "message": "All todos deleted successfully"
  }
  ```

---

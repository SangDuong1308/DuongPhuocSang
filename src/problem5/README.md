# Resource Management API

A RESTful API built with **Express.js** and **TypeScript** that provides CRUD operations for resource management.

---

## Features

- **CRUD Operations**: Create, Read, Update, and Delete resources.
- **Filtering and Searching**:
  - Filter resources by status.
  - Search resources by title and description.
- **Database Integration**: MySQL database using Sequelize.
- **Type Safety**: Fully type-safe with TypeScript.

---

## Prerequisites

- **Node.js**: v14 or higher
- **MySQL Server**
- **npm** or **yarn**

---

## Project Setup

### 1. Clone the Repository
```bash
git clone https://github.com/SangDuong1308/DuongPhuocSang.git
cd src/problem5
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create a `.env` File
Create a `.env` file in the root directory with the following configuration:
```env
# Server Configuration
PORT=8080

# Database Configuration
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=3306
```

### 4. Create the MySQL Database
Run the following SQL command to create the database:
```sql
CREATE DATABASE your_database;
```

---

## Running the Application

### Development Mode
```bash
npm run dev
```

---

## API Endpoints

### **Resources**

#### 1. Create a Resource
- **Method**: `POST`
- **Endpoint**: `/api/resources`
- **Body**:
  ```json
  {
      "title": "string",
      "description": "string",
      "status": "active" | "inactive"
  }
  ```

#### 2. Get All Resources
- **Method**: `GET`
- **Endpoint**: `/api/resources`
- **Query Parameters**:
  - `status`: Filter by status (`active` or `inactive`)
  - `search`: Search in title and description

#### 3. Get a Single Resource
- **Method**: `GET`
- **Endpoint**: `/api/resources/:id`

#### 4. Update a Resource
- **Method**: `PUT`
- **Endpoint**: `/api/resources/:id`
- **Body**:
  ```json
  {
      "title": "string",
      "description": "string",
      "status": "active" | "inactive"
  }
  ```

#### 5. Delete a Resource
- **Method**: `DELETE`
- **Endpoint**: `/api/resources/:id`

---

## Example API Usage

### 1. Create a Resource
```bash
curl -X POST http://localhost:8080/api/resources \  
-H "Content-Type: application/json" \  
-d '{
    "title": "Sample Resource",
    "description": "This is a sample resource",
    "status": "active"
}'
```

### 2. Get Resources with Filter
```bash
curl "http://localhost:8080/api/resources?status=active&search=sample"
```

### 3. Update a Resource
```bash
curl -X PUT http://localhost:8080/api/resources/1 \  
-H "Content-Type: application/json" \  
-d '{
    "title": "Updated Resource"
}'
```

### 4. Delete a Resource
```bash
curl -X DELETE http://localhost:8080/api/resources/1
```

---

## Project Structure

```
src/
├── controllers/   # Request handlers
├── models/        # Database models
├── routes/        # API routes
├── db/            # Database configuration
├── index.ts       # Server setup
server.ts          # Application entry point
```

---


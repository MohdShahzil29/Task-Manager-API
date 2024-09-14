# Task Manager API

this is a simple mission management API constructed with Node.js, explicit, MongoDB, and Mongoose. It permits customers to create, replace, delete, and manage responsibilities thru diverse endpoints.

## features

- **Create obligations**: users can create new duties with a name, description, due date, and category.
- **View All tasks**: Retrieve a listing of all responsibilities.
- **update responsibilities**: replace venture info which include title, description, due date, and category.
- **whole duties**: Mark obligations as completed.
- **Delete duties**: Delete duties by way of identity.

## technology Used

- **Node.js**: JavaScript runtime for server-aspect development.
- **specific.js**: internet framework for Node.js.
- **MongoDB**: NoSQL database for storing obligations.
- **Mongoose**: item facts Modeling (ODM) library for MongoDB.
- **Supertest**: trying out framework for HTTP assertions.
- **Mocha**: take a look at runner for JavaScript.
- **specific Validator**: Middleware for request validation.
- **dotenv**: surroundings variable supervisor.

## Getting commenced

### conditions

make sure you've got the following mounted:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/venture-supervisor-api.git
cd project-manager-api
2. install dependencies:

npm install
4. Create a .env document in the root listing and upload your MongoDB connection string:

MONGO_URI=Your Mongo DB URL
PORT=5000
6. begin the server:

node app.js

The server could be jogging at http://localhost:5000

### API Endpoints
- **submit** `/api/responsibilities` - Create a new project.
- **GET** `/api/duties` - Get all duties.
- **positioned** `/api/duties/:identity` - replace undertaking through identity.
- **PATCH** `/api/duties/complete/:identity` - Mark a undertaking as whole.
- **DELETE** `/api/tasks/:id` - Delete venture by identity.


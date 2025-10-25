# Todo List Application

A full-stack Todo List application built with Express, MongoDB, and vanilla JavaScript with authentication.

## Features

- User authentication (register, login, logout)
- User management (view, update, delete accounts)
- Create new tasks with title and description
- View all tasks with their completion status
- Update existing tasks
- Mark tasks as complete
- Undo tasks that are marked as complete
- Delete tasks
- Protected routes requiring authentication

## Prerequisites

- Node.js (v12 or higher)
- MongoDB (v4.4 or higher)
- npm (Node Package Manager)
- Postman (for testing API endpoints)

## Installation

1. Clone the repository:
```sh
git clone https://github.com/Kennan-HLTN/To-do-list-application.git
cd To-do-list-application
```

2. Install dependencies:
```sh
npm install
```

3. Configure MongoDB:
   - Make sure MongoDB is running on your system
   - The application will connect to `mongodb://127.0.0.1:27017/todo`

## Running the Application

1. Start the server:
```sh
npm run dev
```

2. For development with auto-reload:
```sh
npm run dev
```

3. Access the application:
   - Open your browser and navigate to `http://localhost:3000`
   - You will be redirected to login page if not authenticated

## Project Structure

- `/config` - Database configuration
- `/controller` - Request handlers for todo and auth operations
- `/model` - MongoDB schemas (User and Todo)
- `/public` - Frontend files (HTML, CSS, client-side JS)
- `/routes` - API route definitions
- `/middleware` - Authentication middleware
- `app.js` - Main application entry point

## API Endpoints

### Authentication Endpoints
- `POST /api/register` - Register new user
- `POST /api/login` - Login user
- `GET /api/users` - Get all users
- `DELETE /api/users/:id` - Delete user
- `PUT /api/users/:id` - Update user details

### Todo Endpoints (Protected - Requires Authentication)
- `GET /api/todo` - Get all todos
- `POST /api/todo` - Create a new todo
- `PUT /api/todo/:id` - Update a todo
- `PATCH /api/todo/:id/completion` - Toggle todo completion status
- `DELETE /api/todo/:id` - Delete a todo

## Testing with Postman

### Authentication
1. Register a new user:
   - POST `http://localhost:3000/api/register`
   - Body (JSON):
   ```json
   {
       "username": "yourUsername",
       "email": "your@email.com",
       "password": "yourPassword"
   }
   ```

2. Login:
   - POST `http://localhost:3000/api/login`
   - Body (JSON):
   ```json
   {
       "email": "your@email.com",
       "password": "yourPassword"
   }
   ```
   - Save the returned token

3. For protected routes:
   - Add header:
     - Key: `Authorization`
     - Value: `Bearer your-token-here`

### User Management
- View users: GET `http://localhost:3000/api/users`
- Delete user: DELETE `http://localhost:3000/api/users/:id`
- Update user: PUT `http://localhost:3000/api/users/:id`
  ```json
  {
      "username": "newUsername",
      "email": "newemail@example.com",
      "password": "newPassword"
  }
  ```

## Technologies Used

- Backend:
  - Express.js
  - Mongoose
  - JWT for authentication
- Frontend:
  - HTML5
  - CSS3
  - Vanilla JavaScript
- Database:
  - MongoDB

## Important Notes

- To access the API directly, use Postman with the endpoints listed above
- For UI experience, visit http://localhost:3000
- All todo operations require authentication
  
## Author

Kennan.H

## License

ISC

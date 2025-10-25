# Todo List Application

A full-stack Todo List application built with Express, MongoDB, and vanilla JavaScript.

## Features

- Create new tasks with title and description
- View all tasks with their completion status
- Update existing tasks
- Mark tasks as complete
- Undo tasks that are marked as complete
- Delete tasks

## Prerequisites

- Node.js (v12 or higher)
- MongoDB (v4.4 or higher)
- npm (Node Package Manager)
- Postman (Optional for back end)

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

## Project Structure

- `/config` - Database configuration
- `/controller` - Request handlers for todo operations
- `/model` - MongoDB schema definition
- `/public` - Frontend files (HTML, CSS, client-side JS)
- `/routes` - API route definitions
- `app.js` - Main application entry point

## API Endpoints

- `GET /api/todo` - Get all todos
- `POST /api/todo` - Create a new todo
- `PUT /api/todo/:id` - Update a todo
- `PATCH /api/todo/:id/completion` - Toggle todo completion status
- `DELETE /api/todo/:id` - Delete a todo

## Technologies Used

- Backend:
  - Express.js
  - Mongoose
- Frontend:
  - HTML5
  - CSS3
  - Vanilla JavaScript
- Database:
  - MongoDB

## Important Notes

- To check the full raw data go to http://localhost:3000/api/todo
- To get the UI / UX Experience, go to http://localhost:3000
  
## Author

Kennan.H


## License

ISC

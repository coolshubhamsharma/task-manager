# Task Management Application

A full‑stack Task Management application built as part of a technical
assessment.\
The project demonstrates backend architecture, authentication, security
practices, database handling, frontend integration, and deployment
readiness.

------------------------------------------------------------------------

## Tech Stack

### Backend

-   Node.js
-   Express.js
-   TypeScript
-   Prisma ORM
-   PostgreSQL
-   JWT Authentication
-   bcrypt (password hashing)
-   AES Encryption

### Frontend

-   Next.js (App Router)
-   TypeScript
-   TailwindCSS
-   Axios

### Deployment

-   Backend: Render 
-   Frontend: Vercel

------------------------------------------------------------------------

## Features

### Authentication

-   User Registration
-   User Login
-   JWT-based authentication
-   Access token stored in **HTTP-only cookies**
-   Passwords hashed using **bcrypt**

### Task Management

-   Create task
-   Update task
-   Delete task
-   List tasks

Each task includes: - Title - Description - Status (pending /
completed) - Created Date

### Security Features

-   Secure cookie configuration
-   JWT authentication
-   Password hashing (bcrypt)
-   AES encryption for sensitive fields
-   Input validation
-   SQL Injection protection via Prisma ORM

### Functional Features

-   Pagination in task listing
-   Filter tasks by status
-   Search tasks by title
-   Users can access **only their own tasks**
-   Protected frontend routes

------------------------------------------------------------------------

## Installation & Setup

### 1. Clone the Repository

    git clone https://github.com/coolshubhamsharma/task-manager.git
    cd task-manager

------------------------------------------------------------------------

## Backend Setup

    cd backend
    npm install

Create .env file:

    DATABASE_URL="postgresql://user:password@localhost:5432/taskdb"
    JWT_SECRET="your_jwt_secret"
    AES_SECRET="your_32_character_secret_key"
    PORT=5000

Run Prisma migrations:

    npx prisma migrate dev

Start backend server:

    npm run dev

Backend runs on:

    http://localhost:5000

------------------------------------------------------------------------

## Frontend Setup

    cd frontend
    npm install
    npm run dev

Frontend runs on:

    http://localhost:3000

------------------------------------------------------------------------

## API Endpoints

### Authentication

**Register**

POST `/auth/register`

    {
     "email": "user@example.com",
     "password": "password123"
    }

**Login**

POST `/auth/login`

    {
     "email": "user@example.com",
     "password": "password123"
    }

------------------------------------------------------------------------

### Tasks

**Create Task**

POST `/tasks`

    {
     "title": "Learn Node.js",
     "description": "Build REST APIs"
    }

**Get Tasks**

GET `/tasks?page=1&limit=10&status=pending&search=node`

**Update Task**

PUT `/tasks/:id`

**Delete Task**

DELETE `/tasks/:id`

------------------------------------------------------------------------

## Security Practices Implemented

-   HTTP‑only cookies for authentication
-   Password hashing using bcrypt
-   AES encryption for sensitive data
-   Input validation
-   Environment variables for secrets
-   ORM-based query protection against SQL injection

------------------------------------------------------------------------

## Deployment

### Backend

Deploy to: - Render 

### Frontend

Deploy using:

    vercel deploy

------------------------------------------------------------------------


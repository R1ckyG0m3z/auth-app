# Authentication Application

A full-stack secure authentication application with React.js frontend and Express.js backend using PostgreSQL.

## Features

- User registration with email, password, and role (Admin/Customer)
- User login with JWT token authentication
- Password hashing with bcrypt
- Role-based access (Admin and Customer roles)
- Protected dashboard displaying user information and role
- Responsive UI with modern styling

## Tech Stack

**Frontend:**

- React.js (with Vite)
- React Router DOM
- Axios
- CSS3

**Backend:**

- Express.js
- PostgreSQL
- bcrypt (password hashing)
- jsonwebtoken (JWT authentication)
- CORS

## Project Structure

```
auth-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── api/
│   │   │   └── auth.js    # API service functions
│   │   ├── pages/
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── server/                 # Express backend
    ├── routes/
    │   └── auth.js        # Authentication routes
    ├── db.js              # Database connection
    ├── server.js          # Main server file
    ├── schema.sql         # Database schema
    ├── package.json
    └── .env.example       # Environment variables template
```

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Setup Instructions

### 1. Database Setup

First, install PostgreSQL if you haven't already, then create the database:

```bash
# Open PostgreSQL command line (psql)
psql -U postgres

# Create the database
CREATE DATABASE auth_db;

# Exit psql
\q
```

Now run the schema to create the users table:

```bash
# From the project root, navigate to the server directory
cd server

# Run the schema file
psql -U postgres -d auth_db -f schema.sql
```

Alternatively, you can copy the SQL commands from `server/schema.sql` and run them directly in your PostgreSQL client.

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env file with your configuration
# Update the following variables:
# - DATABASE_URL: Your PostgreSQL connection string
# - JWT_SECRET: A secure random string for JWT signing
```

Example `.env` file:

```env
PORT=5000
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/auth_db
JWT_SECRET=your_super_secret_jwt_key_change_this
```

### 3. Frontend Setup

```bash
# Navigate to client directory (from project root)
cd client

# Install dependencies
npm install
```

## Running the Application

You need to run both the backend and frontend servers:

### Terminal 1 - Backend Server

```bash
cd server
npm start
```

The backend will run on `http://localhost:5000`

For development with auto-restart:

```bash
npm run dev
```

### Terminal 2 - Frontend Server

```bash
cd client
npm run dev
```

The frontend will run on `http://localhost:3000`

## Using the Application

1. **Register a New User:**

   - Navigate to `http://localhost:3000`
   - You'll be redirected to the login page
   - Click "Create one" to go to the registration page
   - Fill in email, password, confirm password, and select a role (Admin or Customer)
   - Click "Register"

2. **Login:**

   - Enter your email and password
   - Click "Sign In"

3. **Dashboard:**
   - After successful login, you'll be redirected to the dashboard
   - The dashboard displays your email, user ID, and role
   - Different content is shown based on your role (Admin/Customer)
   - Click "Logout" to sign out

## API Endpoints

### POST `/api/auth/register`

Register a new user

```json
{
  "email": "user@example.com",
  "password": "password123",
  "role": "Customer"
}
```

### POST `/api/auth/login`

Login an existing user

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### GET `/api/auth/verify`

Verify JWT token (requires Authorization header)

```
Authorization: Bearer <token>
```

### GET `/api/health`

Health check endpoint

## Security Features

- **Password Hashing:** User passwords are hashed using bcrypt with 10 salt rounds
- **JWT Authentication:** Secure token-based authentication with 24-hour expiration
- **Role-Based Access:** Users can have Admin or Customer roles
- **Input Validation:** Server-side validation for all inputs
- **CORS:** Configured to allow cross-origin requests from frontend
- **SQL Injection Prevention:** Using parameterized queries with pg library

## Environment Variables

**Server (.env):**

- `PORT`: Server port (default: 5000)
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: Secret key for JWT signing

## Troubleshooting

**Database Connection Error:**

- Verify PostgreSQL is running
- Check DATABASE_URL in .env file
- Ensure database exists: `psql -U postgres -l`

**Port Already in Use:**

- Backend: Change PORT in server/.env
- Frontend: Change port in client/vite.config.js

**CORS Error:**

- Ensure backend is running on port 5000
- Check API_URL in client/src/api/auth.js matches backend URL

## Future Enhancements

- Email verification
- Password reset functionality
- Refresh tokens
- Two-factor authentication
- Admin panel for user management
- Session management
- Remember me functionality

## License

ISC

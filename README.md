
# Login/Signup Application
Deplyoed Link:- https://padhakku-g5e7.vercel.app/
## Overview

This project implements a basic Login/Signup application with secure password encryption and session management. It consists of a frontend built with HTML, CSS, and JavaScript, and a backend built with Node.js, Express.js, and MongoDB.

## Features

- **User Registration:** Allows users to sign up with an email and password.
- **User Login:** Users can log in with their registered email and password.
- **Password Encryption:** Ensures that passwords are securely encrypted using bcrypt.
- **Password Policy:** Enforces the use of numbers, alphabets, and special characters in passwords.
- **Session Management:** Maintains user session to prevent logout on page refresh.

## Technologies Used

### Frontend

- **HTML:** Structure of the web pages.
- **CSS:** Styling of the web pages.
- **JavaScript:** Client-side scripting for form validation and interaction.

### Backend

- **Node.js:** Server-side runtime environment.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** Database for storing user credentials and session data.
- **bcrypt:** Library for password hashing.
- **express-session:** Middleware for session management.
- **connect-mongo:** MongoDB session store for Express.

## Prerequisites

- Node.js
- MongoDB
- A web browser (Google Chrome, Firefox, etc.)

## Installation

### Backend Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/prabhat8701/padhakku.git/Backend
    cd Backend
    ```

2. **Install backend dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```
    PORT=4000
    MONGODB_URI=mongodb://localhost:27017/your-database-name
    SESSION_SECRET=your-session-secret
    ```

4. **Start the backend server:**
    ```bash
    npm start
    ```

### Frontend Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/prabhat8701/padhakku.git/Frontend
    cd Frontend
    ```

2. **Open the project in your code editor:**
    Use any code editor like Visual Studio Code, Sublime Text, etc.

3. **Start the backend server:**
    Make sure the backend server is running as mentioned in the backend installation instructions.

4. **Open the application:**
    Navigate to `http://localhost:3000` in your web browser.





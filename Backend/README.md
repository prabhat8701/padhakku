# Login/Signup Page with Email and Password

## Overview

This project implements a basic Login/Signup page where users can register with their email and password, and login using the same credentials. The password is securely encrypted, and it mandates the use of numbers, alphabets, and special characters. Additionally, the application stores session details to ensure that the user remains logged in even after refreshing the page.

## Features

- **User Registration:** Allows users to sign up with an email and password.
- **User Login:** Users can log in with their registered email and password.
- **Password Encryption:** Ensures that passwords are securely encrypted.
- **Password Policy:** Enforces the use of numbers, alphabets, and special characters in passwords.
- **Session Management:** Maintains user session to prevent logout on page refresh.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Password Encryption:** bcrypt
- **Session Management:** Express-session, Connect-mongo

## Prerequisites

- Node.js
- MongoDB

## Installation

1. **Clone the repository:**
    ```bash
    Git clone https://github.com/prabhat8701/padhakku.git/Backend
    cd Backend
    ```

2. **Install dependencies:**
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

4. **Start the application:**
    ```bash
    npm start
    ```

5. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

## Folder Structure

```
your-repository
│
├── public
│   ├── css
│   │   └── styles.css
│   └── js
│       └── script.js
│
├── routes
│   ├── index.js
│   └── auth.js
│
├── views
│   ├── login.ejs
│   ├── signup.ejs
│   └── dashboard.ejs
│
├── .env
├── app.js
├── package.json
└── README.md
```

## Usage

### User Registration

1. Navigate to the Signup page.
2. Enter your email and create a password.
3. Password must contain numbers, alphabets, and special characters.
4. Click the Signup button to register.

### User Login

1. Navigate to the Login page.
2. Enter your registered email and password.
3. Click the Login button to access your dashboard.

### Session Management

- After logging in, the user will remain logged in even after refreshing the page.
- To logout, the user can click on the Logout button provided on the dashboard.

## Security

- Passwords are encrypted using bcrypt before storing them in the database.
- Session details are stored using express-session and connect-mongo to ensure persistent sessions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Contact

For any inquiries or issues, please contact prabhat8701.ps@gmail.com.

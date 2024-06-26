# Frontend README

## Overview

This project implements the frontend of a Login/Signup page where users can register and log in using their email and password. The application ensures a user-friendly interface with secure password entry and session persistence. 

## Features

- **User Registration Form:** Allows users to create an account with their email and password.
- **User Login Form:** Enables users to log in using their registered credentials.
- **Password Validation:** Enforces the use of numbers, alphabets, and special characters in passwords.
- **Session Management:** Keeps users logged in even after refreshing the page.

## Technologies Used

- **HTML:** Structure of the web pages.
- **CSS:** Styling of the web pages.
- **JavaScript:** Client-side scripting for form validation and interaction.

## Prerequisites

- A web browser (Google Chrome, Firefox, etc.)

## Folder Structure

```
public
├── css
│   └── styles.css
├── js
│   └── script.js
views
├── login.ejs
├── signup.ejs
└── dashboard.ejs
```

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/prabhat8701/padhakku.git/Frontend
    cd Frontend
    ```

2. **Open the project in your code editor:**
    Use any code editor like Visual Studio Code, Sublime Text, etc.

3. **Start the backend server:**
    Make sure the backend server is running as mentioned in the main README file.

4. **Open the application:**
    Navigate to `http://localhost:3000` in your web browser.

## File Descriptions

### `public/css/styles.css`

- Contains the CSS styling for the web pages.
- Defines the layout, colors, fonts, and responsiveness of the Login, Signup, and Dashboard pages.

### `public/js/script.js`

- Contains JavaScript code for client-side validation and interaction.
- Validates the password to ensure it includes numbers, alphabets, and special characters.
- Handles form submissions and displays error messages.

### `views/login.ejs`

- EJS template for the Login page.
- Contains the form for user login with fields for email and password.

### `views/signup.ejs`

- EJS template for the Signup page.
- Contains the form for user registration with fields for email and password.
- Displays validation messages for password requirements.

### `views/dashboard.ejs`

- EJS template for the Dashboard page.
- Displays a welcome message and a logout button for the logged-in user.

## Usage

### User Registration

1. Navigate to the Signup page.
2. Enter your email and create a password.
3. Ensure the password contains numbers, alphabets, and special characters.
4. Click the Signup button to register.

### User Login

1. Navigate to the Login page.
2. Enter your registered email and password.
3. Click the Login button to access your dashboard.

### Session Management

- After logging in, the user will remain logged in even after refreshing the page.
- To logout, the user can click on the Logout button provided on the dashboard.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.


## Contact

For any inquiries or issues, please contact prabhat8701.ps@gmail.com

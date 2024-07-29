# User Management System

## Description

A comprehensive User Management System developed using Node.js, Express, and MongoDB. This application allows users to perform essential CRUD operations including creating, reading, updating, and deleting user records. The system leverages MongoDB Atlas for cloud database hosting. The frontend is dynamically rendered using EJS.

## Features

- **Node.js and Express**: Provides a robust and scalable backend infrastructure.
- **MongoDB**: Used as the primary database for storing user information.
- **CRUD Operations**:
  - **Create**: Add new users with necessary details.
  - **Read**: Display all users in a structured table format.
  - **Update**: Modify existing user information.
  - **Delete**: Remove users from the database.
- **MongoDB Atlas**: Hosted on a cloud server for enhanced data management and accessibility.
- **EJS Templating**: Dynamic rendering of user interfaces.
- **Method-Override**: Allows usage of PUT and DELETE methods in forms.
- **Body-Parser**: Parses incoming request bodies for easier handling.
- **Morgan**: HTTP request logging for monitoring and debugging.

## Setup Instructions

1. **Clone the repository**:
   ```sh
   git clone <repository link>


2. **Install dependencies**:
   ```sh
   npm install


3. **Configure Environment Variables**:
   - Create a .env file in the root directory.
   - Add the following variables:
   ```sh
   PORT=8080
   MONGO_URL=your_mongodb_atlas_connection_string

4. **Start the application**:
   ```sh
   npm start


------------


## Dependencies
 - Express
 - MongoDB
 - Mongoose
 - EJS
 - Method-Override
 - Body-Parser
 - Morgan
 - dotenv

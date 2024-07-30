## Demo Video
https://github.com/user-attachments/assets/ad432d48-0ce7-4009-8568-96c1d44f7e91


# Snapshots

 - All Users
   
![allUsers](https://github.com/user-attachments/assets/73e1af43-cbea-4bc0-8f07-f8a62f03ae6d)

 - Add User
   
![addUser](https://github.com/user-attachments/assets/23f76c13-75ae-411e-ada3-4445fd163380)
![addedUser](https://github.com/user-attachments/assets/ff85111b-7e86-486e-96bf-919b97df7b7a)

 - Update User
   
![updateUser](https://github.com/user-attachments/assets/d7459fa0-f6ca-4814-9c74-6046430bc9bf)
![updatedUser](https://github.com/user-attachments/assets/0005071b-3819-440e-b9d7-3efee979905a)


-----------------

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


1. **Install dependencies**:
   ```sh
   npm install


2. **Configure Environment Variables**:
   - Create a .env file in the root directory.
   - Add the following variables:
   ```sh
   PORT=8080
   MONGO_URL=your_mongodb_atlas_connection_string

3. **Start the application**:
   ```sh
   nodemon server.js


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

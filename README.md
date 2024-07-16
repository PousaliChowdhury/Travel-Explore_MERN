# MERN Tourism Website

## Features
- User Authentication: Secure login and registration using JWT (JSON Web Tokens).
- Interactive Trip Planner: Users can plan and customize their trips, save itineraries, and get recommendations.
- Destination Pages: Detailed pages with descriptions, images, and user reviews for various destinations.
- Travel Guides: Comprehensive guides for different travel activities and tips.
- Community Platform: Users can share experiences, photos, and advice.
- Responsive Design: Optimized for various devices, ensuring a seamless user experience.

## Frontend:
### Technologies Used: HTML, CSS, JavaScript, React.js, Bootstrap
### Features:
- Responsive and interactive user interface
- Navigation bar for easy access to different sections
- Forms for user registration, login
- Dynamic rendering of destination pages and travel guides
- Community platform for user interaction

## Backend:
### Technologies Used: Node.js, Express.js
### Features:
+ API endpoints for user authentication
+ Middleware for request validation and error handling
+ Database interactions using MongoDB
+ Secure data handling with JWT for authentication
  
## Database:
### Database Used: MongoDB
### Features:
+ Collections for users
+ CRUD operations for managing user data 

## Install dependencies for both frontend and backend
### Install server dependencies & start
```
cd server
npm install express mongoose cors nodemon bcrypt joi jsonwebtoken body-parser dotenv
npm start
```

### Install client dependencies & start
```
npm create-react-app <appname>
cd client
npm install swiper react-bootstrap bootstrap react-alice-carousel react-router-dom axios react-icons aos --save axios react-icons react-toastify -g react-scripts  eslint-config-react-app --save-dev
npm start
```

## Access the application:
Open your web browser and navigate to `http://localhost:8080`

## API Endpoints

### User Authentication:
#### Register a New User:
* Endpoint: POST /api/auth/register
* Description: Registers a new user with email and password.
* Request Body: { "email": "user@example.com", "password": "password123" }
* Response: { "message": "User registered successfully", "user": { "id": "userId", "email": "user@example.com" } }

#### Log in a User:
* Endpoint: POST /api/auth/login
* Description: Authenticates a user and returns a JWT.
* Request Body: { "email": "user@example.com", "password": "password123" }
* Response: { "token": "JWT token", "user": { "id": "userId", "email": "user@example.com" } }
  
### User Management:
#### Get All Users:
* Endpoint: GET /api/users
* Description: Retrieves a list of all registered users.
* Response: { "users": [ { "id": "userId", "email": "user@example.com" }, ... ] }

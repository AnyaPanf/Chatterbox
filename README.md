# Chatterbox

Chatterbox is a real-time chat application built using React for the frontend and Node.js (Express and Socket.IO) for the backend. 
This project provides a simple chat interface with real-time communication capabilities.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Frontend Setup](#frontend-setup)
5. [Backend Setup](#backend-setup)
6. [Running the Project](#running-the-project)
7. [Technologies Used](#technologies-used)
8. [License](#license)

## Project Overview

Chatterbox allows users to communicate in real-time using a chat interface. It consists of two main components:

- **Frontend (Client)**: Built using React and Material UI.
- **Backend (Server)**: Built using Node.js with Express and Socket.IO to manage real-time communication.

## Features

- Real-time messaging using Socket.IO
- User search functionality
- Emoji picker support
- Responsive design with Material UI

## Project Structure

The project is split into two main directories:

### Frontend (Client)
This directory contains the React application that powers the user interface.

\```
client/
  ├── public/
  └── src/
      ├── components/
      ├── App.js
      ├── index.js
      └── ...
\```

### Backend (Server)
This directory contains the Node.js server, responsible for handling incoming connections and relaying messages in real-time.

\```
server/
  ├── index.js
  └── package.json
\```

## Frontend Setup

To set up the frontend locally, follow these steps:

1. Navigate to the `client` directory:

\```
cd client
\```

2. Install the necessary dependencies:

\```
npm install
\```

3. Start the frontend development server:

\```
npm start
\```

The app will run at `http://localhost:3000`.

## Backend Setup

To set up the backend locally, follow these steps:

1. Navigate to the `server` directory:

\```
cd server
\```

2. Install the necessary dependencies:

\```
npm install
\```

3. Start the backend server:

\```
npm run dev
\```

The server will run at `http://localhost:5000`.

## Running the Project

To run the entire application locally, you'll need to start both the frontend and backend servers:

1. **Start the backend server**:

\```
cd server
npm run dev
\```

2. **Start the frontend server** (in a separate terminal window):

\```
cd client
npm start
\```

Your app will be accessible at `http://localhost:3000` and will communicate with the backend at `http://localhost:5000`.

## Technologies Used

- **Frontend**:
  - React
  - Material UI
  - Socket.IO Client
  - Emoji Picker

- **Backend**:
  - Node.js
  - Express
  - Socket.IO

- **Development Tools**:
  - Nodemon
  - React Scripts

## License

This project is licensed under the MIT License.

---

Feel free to fork or clone this project for personal or educational use.

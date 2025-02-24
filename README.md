# Real-Time Notification System

This project is a **Real-Time Notification System** built using **Node.js (Express)**, **Next.js**, **Socket.io**, and a **Database**. It allows users to receive real-time notifications with features like user authentication, database storage, and a responsive UI.

---

## Features

- **Real-time notifications** using WebSockets (Socket.io).
- **User authentication** via JWT or NextAuth.
- **API Endpoints**:
  - `POST /notifications`: Save notifications to the database.
  - `GET /notifications`: Fetch user notifications.
- **Database Storage**: Notifications are stored in a database for persistence.
- **Next.js UI**: Real-time updates displayed in the frontend.
- **Bonus Features**:
  - Read/unread status for notifications.
  - Push notifications (extendable to mobile).
  - Redis caching for improved performance.

---

## Tech Stack

- **Backend**: Node.js, Express, Socket.io
- **Frontend**: Next.js
- **Database**: MongoDB (or any database of your choice)
- **Authentication**: JWT or NextAuth
- **Real-time Communication**: Socket.io
- **Bonus**: Redis (for caching)

---

## Setup Instructions

### Prerequisites

- Node.js and npm installed.
- MongoDB (or any database) installed and running.
- Redis (optional, for caching).

---

## Set Up the Backend:
	- Navigate to the server directory:
		`cd server`
	- Install dependencies:
		`npm install`
	- Create a .env file in the server directory and add the following environment variables
	- Start the server:
		`npm run dev`
---

## Set Up the Frontend:
	- Navigate to the client directory:
		`cd ../client`
	- Install dependencies:
		`npm install`
	- Start the Next.js development server
		`npm run dev`

---

## Run the Application:
	- Access the frontend at `http://localhost:3000`.
	- The backend will be running at `http://localhost:5000`.

---

## Contributing
Contributions are welcome!

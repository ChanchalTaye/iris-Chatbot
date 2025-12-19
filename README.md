# 🤖 Iris – Full Stack Chatbot Application

A modern **full-stack chatbot application** built using **React (Vite)** on the frontend and **Node.js + Express + MongoDB** on the backend.  
Iris provides a clean chat interface where users can send messages and receive instant responses powered by predefined logic, with conversations stored in MongoDB.

---

## 🚀 Features

### 🔹 1. Interactive Chat Interface
- Clean, dark-mode UI inspired by modern AI chat apps  
- Real-time message display for user and bot  
- Smooth auto-scrolling to latest messages  
- “Iris is typing…” indicator for better UX  

### 🔹 2. Frontend (React + Vite)
- Built using **React** with **Vite** for fast development  
- State management using React Hooks (`useState`, `useEffect`, `useRef`)  
- Styled using **Tailwind CSS**  
- Icons powered by **React Icons**  
- API communication using **Axios**

### 🔹 3. Backend (Node.js + Express)
- REST API built with **Express.js**  
- Modular MVC structure (Routes, Controllers, Models)  
- Message handling via POST API  
- Clean error handling with proper HTTP status codes  

### 🔹 4. MongoDB Integration
- Uses **MongoDB Atlas (Cloud Database)**  
- Stores:
  - User messages
  - Bot responses  
- Managed via **Mongoose ODM**  

### 🔹 5. Environment & Security
- Sensitive credentials stored using `.env`  
- MongoDB URI and port configuration handled securely  
- GitHub secret scanning handled by password rotation & `.env` usage  

---

## 🧠 How Iris Works

1. User enters a message in the chat input  
2. Frontend sends the message to backend API  
3. Backend:
   - Validates input
   - Matches predefined responses
   - Stores user & bot messages in MongoDB  
4. Response is sent back to frontend  
5. UI updates instantly with chat bubbles  

---

## 🛠️ Tech Stack

| Category | Tools |
|--------|------|
| **Frontend** | React, Vite, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **ODM** | Mongoose |
| **HTTP Client** | Axios |
| **Icons** | React Icons |
| **Dev Tools** | Nodemon, dotenv |
| **Version Control** | Git, GitHub |

---

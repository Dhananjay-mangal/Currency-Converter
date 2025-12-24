# 💱 Currency Converter Web App

A full-stack **Currency Converter** application that allows users to convert currencies in real time using live exchange rates.  
The project is built with **React** on the frontend and **Node.js + Express** on the backend, consuming a public currency API.

---

## 🚀 Features

- 🔄 Convert between 150+ global currencies
- 🌍 Live exchange rates
- 🔁 Swap source and target currencies
- ⚡ Fast and responsive UI
- 🎨 Modern UI using Tailwind CSS
- 🔗 REST API integration
- 🧠 Clean separation of frontend & backend

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Axios
- CORS

### API Used
- **Fawaz Ahmed Currency API**  
  https://github.com/fawazahmed0/currency-api

---

## 📂 Project Structure

Currency-Converter/
│
├── backend/
│ ├── index.js # Express server
│ ├── package.json
│ └── node_modules/
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ │ └── currency.js # Axios instance
│ │ ├── components/
│ │ │ └── Content.jsx # Main UI component
│ │ ├── App.js
│ │ └── index.js
│ ├── package.json
│ └── node_modules/
│
└── README.md
WhatsApp Chat Analyzer - Frontend

Author: Praveen Kumar M
Tech Stack: React, React Query, Axios, React Hot Toast, Recharts

Project Overview

This is the frontend of the WhatsApp Chat Analyzer tool. Users can upload exported WhatsApp chat files (.txt), and the app shows day-wise graphs for active users and new users in the last week. The frontend communicates with the backend API to fetch parsed data and display it visually.

Features

Upload WhatsApp chat files (.txt)

Display daily active users and new users

Visualize data with bar graphs using Recharts

Show notifications using React Hot Toast

Efficient data fetching with React Query

Responsive and user-friendly UI

---

Installation & Setup :

Clone the repo and go to the frontend folder:

cd client

Install dependencies:

npm install

Create a .env file in the root of the frontend folder and add:

VITE_API_URL=http://localhost:8000/api/v1

Start the frontend server:

npm run dev

Open in browser:

http://localhost:5173

Libraries Used

React – Frontend Library

React Query – Data fetching and caching

Axios – HTTP requests to backend

Recharts – Graph visualization

React Hot Toast – Notifications

Folder Structure
client/
├── node_modules/
├── public/
├── src/
│ ├── assets/
│ │ ├── no-data.png
│ │ └── react.svg
│ ├── components/
│ │ ├── ActiveUsersList.jsx
│ │ ├── FileUpload.jsx
│ │ └── UserActivityChart.jsx
│ ├── pages/
│ │ └── Dashboard.jsx
│ ├── services/
│ │ └── chat/
│ │ ├── chatUpload.js
│ │ └── getChatsData.js
│ │ └── axiosMiddleware.js
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

Author

Praveen Kumar M

Contact Number : +91 8248840524

Email: praveenkumar.workss@gmail.com

LinkedIn: www.linkedin.com/in/praveenkumarm-dev

# ⚡ PromoMedia - Campaign Management Platform

A full-stack web application for managing marketing campaigns with an intuitive interface, real-time tracking, and comprehensive analytics.

## Features

- **Campaign Management**: Create, edit, delete, and track marketing campaigns
- **Real-time Status Updates**: Monitor campaign status (Active, Paused, Completed)
- **Dashboard Analytics**: View campaign statistics and overview
- **Search & Filter**: Find campaigns quickly by name or client
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **User Authentication**: Simple login system with session management
- **Clean UI/UX**: Modern, intuitive interface with professional styling

## Tech Stack

### Frontend
- **React 19.2.0** - Modern UI library
- **React Router DOM 7.9.4** - Client-side routing
- **Tailwind CSS 3.3.2** - Utility-first CSS framework
- **Axios 1.12.2** - HTTP client for API calls

### Backend
- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.19.1** - MongoDB object modeling

## Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

## Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd PromoMedia
```

### 2. Backend Setup
```bash
cd backend
npm install
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Database Setup
- Install MongoDB locally or use MongoDB Atlas
- Update the connection string in `backend/server.js` if needed:
```javascript
mongoose.connect('mongodb://localhost:27017/promomediaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
```

### 5. Environment Variables (Optional)
Create a `.env` file in the backend directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/promomediaDB
```

## 🚀 Running the Application

### Start Backend Server
```bash
cd backend
node server.js
```
The backend will run on `http://localhost:5000`

### Start Frontend Development Server
```bash
cd frontend
npm start
```
The frontend will run on `http://localhost:3000`

### Access the Application
- Open your browser and navigate to `http://localhost:3000`
- Use the demo credentials:
  - **Username**: `admin`
  - **Password**: `1234`

## 📁 Project Structure

```
PromoMedia/
├── backend/
│   ├── models/
│   │   └── Campaign.js          # MongoDB schema
│   ├── routes/
│   │   └── campaigns.js         # API routes
│   ├── package.json
│   └── server.js               # Express server
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── CampaignForm.js     # Campaign creation form
│   │   │   ├── CampaignTable.js    # Campaign display table
│   │   │   ├── DashboardStats.js   # Statistics component
│   │   │   └── Navbar.js           # Navigation component
│   │   ├── pages/
│   │   │   ├── Landing.js          # Landing page
│   │   │   ├── Login.js            # Login page
│   │   │   ├── Home.js             # Dashboard home
│   │   │   └── CampaignTracker.js  # Main campaign page
│   │   ├── App.js                  # Main app component
│   │   ├── api.js                  # API configuration
│   │   └── index.js                # App entry point
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/campaigns` | Get all campaigns |
| POST | `/api/campaigns` | Create new campaign |
| PATCH | `/api/campaigns/:id` | Update campaign status |
| DELETE | `/api/campaigns/:id` | Delete campaign |

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Active Navigation States**: Visual feedback for current page
- **Smooth Animations**: CSS transitions and hover effects
- **Professional Styling**: Clean, modern interface
- **Accessibility**: Proper focus states and keyboard navigation
- **Empty States**: Helpful messages when no data is present

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
cd frontend
npm run build
# Deploy the 'build' folder
```

### Backend (Heroku/Railway)
```bash
cd backend
# Add start script to package.json: "start": "node server.js"
# Deploy with MongoDB Atlas connection string
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is Published by Adithya-G.

## 🆘 Support

If you encounter any issues or have questions, please open an issue in the repository.

---

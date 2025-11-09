import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CampaignTracker from "./pages/CampaignTracker";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tracker" element={<CampaignTracker />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

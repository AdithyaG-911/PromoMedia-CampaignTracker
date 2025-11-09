import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getNavLinkClasses = (path) => {
    const baseClasses = "font-medium transition-colors px-3 py-2 rounded-md";
    const activeClasses = "text-blue-600 bg-blue-50";
    const inactiveClasses = "text-gray-700 hover:text-blue-600 hover:bg-gray-50";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors">
              <span className="text-xl font-bold">⚡ PromoMedia</span>
            </Link>
          </div>
          
          {/* Desktop Navigation(Responsive, yes) */}
          <div className="hidden md:flex items-center space-x-8">
            {isActive("/home") ? (
              <span className={getNavLinkClasses("/home")}>
                Dashboard
              </span>
            ) : (
              <Link 
                className={getNavLinkClasses("/home")}
                to="/home"
              >
                Dashboard
              </Link>
            )}
            {isActive("/tracker") ? (
              <span className={getNavLinkClasses("/tracker")}>
                Campaigns
              </span>
            ) : (
              <Link 
                className={getNavLinkClasses("/tracker")}
                to="/tracker"
              >
                Campaigns
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Sign Out
            </button>
          </div>

          {/* Mobile menu button, Responsive yes */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md hover:bg-gray-50 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu, Responsive yes */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {isActive("/home") ? (
                <span className="block px-3 py-2 text-blue-600 bg-blue-50 rounded-md font-medium">
                  Dashboard
                </span>
              ) : (
                <Link 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors" 
                  to="/home"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}
              {isActive("/tracker") ? (
                <span className="block px-3 py-2 text-blue-600 bg-blue-50 rounded-md font-medium">
                  Campaigns
                </span>
              ) : (
                <Link 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors" 
                  to="/tracker"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Campaigns
                </Link>
              )}
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-md font-medium transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

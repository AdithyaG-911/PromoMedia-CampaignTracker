import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    document.getElementById('features-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">⚡ PromoMedia</h1>
            </div>
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ⚡ Track Your Marketing
              <span className="block text-blue-200">Campaigns Effectively</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Manage your marketing campaigns with ease. Track progress, monitor performance, and stay organized with our intuitive campaign management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/login")}
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-base sm:text-lg shadow-lg"
              >
                Start Managing Campaigns
              </button>
              <button 
                onClick={scrollToFeatures}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-base sm:text-lg"
              >
                View Features
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Campaign Management Solution
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to organize, track, and manage your marketing campaigns in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Campaign Tracking</h3>
              <p className="text-gray-600">
                Monitor your campaigns with real-time status updates and comprehensive tracking dashboard.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Simple Organization</h3>
              <p className="text-gray-600">
                Create, edit, and organize your campaigns with a clean and intuitive interface.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Search</h3>
              <p className="text-gray-600">
                Find your campaigns instantly with powerful search and filtering options.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to manage your campaigns better?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start organizing your marketing campaigns today with our simple and effective platform.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
          >
            Get Started Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold mb-4">⚡ PromoMedia</h3>
          <p className="text-gray-400">Organize and track your marketing campaigns effectively.</p>
        </div>
      </footer>
    </div>
  );
}

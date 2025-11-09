import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "User";

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="text-center">
            <div className="text-6xl mb-6">⚡</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome back, {username}!
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to manage your marketing campaigns? Your dashboard is ready to help you track and organize all your marketing efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/tracker")}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
              >
                Go to Campaign Tracker
              </button>
              <button
                onClick={() => navigate("/tracker")}
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                View All Campaigns
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

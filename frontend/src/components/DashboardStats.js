import React from "react";

export default function DashboardStats({ campaigns }) {
  // Ensure campaigns is an array
  const safeCampaigns = Array.isArray(campaigns) ? campaigns : [];
  
  const active = safeCampaigns.filter(c => c.status === "Active").length;
  const paused = safeCampaigns.filter(c => c.status === "Paused").length;
  const completed = safeCampaigns.filter(c => c.status === "Completed").length;

  const stats = [
    { 
      label: "Total Campaigns", 
      value: safeCampaigns.length, 
      color: "blue",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      label: "Active Campaigns", 
      value: active, 
      color: "green",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      label: "Paused Campaigns", 
      value: paused, 
      color: "yellow",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      label: "Completed Campaigns", 
      value: completed, 
      color: "purple",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800",
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className={`${getColorClasses(stat.color)} border rounded-xl p-6 hover:shadow-lg transition-all duration-200`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium opacity-80 uppercase tracking-wide">{stat.label}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className="opacity-80">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
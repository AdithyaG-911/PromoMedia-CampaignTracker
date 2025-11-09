import React, { useState, useEffect } from "react";
import API from "../api";
import CampaignForm from "../components/CampaignForm";
import CampaignTable from "../components/CampaignTable";
import DashboardStats from "../components/DashboardStats";

export default function CampaignTracker() {
  const [campaigns, setCampaigns] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCampaigns = async () => {
    try {
      const res = await API.get("");
      setCampaigns(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching campaigns:", err);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleDelete = async (id) => {
    await API.delete(`/${id}`);
    fetchCampaigns();
  };

  const handleStatusChange = async (id, status) => {
    await API.patch(`/${id}`, { status });
    fetchCampaigns();
  };

  const filteredCampaigns = campaigns.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.client.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Campaign Management
          </h1>
          <p className="text-gray-600">
            Create, track, and manage your marketing campaigns efficiently.
          </p>
        </div>

        <CampaignForm onAdd={fetchCampaigns} />

        {/* Dashboard Statistics */}
        <DashboardStats campaigns={campaigns} />

        {/* Search & Filter */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Campaigns</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by campaign name or client..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            {search && (
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">
                  {filteredCampaigns.length} result{filteredCampaigns.length !== 1 ? 's' : ''}
                </span>
                <button
                  onClick={() => setSearch("")}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div className="bg-white border border-gray-200 rounded-xl p-12 text-center shadow-sm">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading campaigns...</p>
          </div>
        ) : (
          <CampaignTable
            campaigns={filteredCampaigns}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        )}
      </div>
    </div>
  );
}

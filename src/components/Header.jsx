// src/components/Header.jsx
import React from "react";

export const Header = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Budget Tracker</h1>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">Total Balance</p>
        <p className="text-4xl font-bold text-green-600">$2,580.00</p>
      </div>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
        Reset Tracker
      </button>
    </div>
  </div>
);

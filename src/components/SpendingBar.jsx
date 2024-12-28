// src/components/SpendingBar.jsx
import React from "react";

export const SpendingBar = ({ category, percentage, color }) => (
  <div className="flex items-center justify-between">
    <p className="text-gray-600">{category}</p>
    <div className="flex items-center space-x-2">
      <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className={`w-${percentage} h-full ${color}`}></div>
      </div>
      <span className="text-sm font-medium">{percentage}%</span>
    </div>
  </div>
);

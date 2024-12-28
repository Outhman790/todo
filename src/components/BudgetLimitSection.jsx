// src/components/BudgetLimitSection.jsx
import React from "react";
import { DollarSign } from "lucide-react";

export const BudgetLimitSection = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold text-gray-800">Budget Limit</h2>
      <div className="flex items-center space-x-2">
        <DollarSign className="text-gray-500" size={20} />
        <input
          type="number"
          className="border rounded-lg px-3 py-2 w-32"
          placeholder="Set limit"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Set
        </button>
      </div>
    </div>
  </div>
);

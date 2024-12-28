// src/components/SpendingAnalysis.jsx
import React from "react";
import { PieChart } from "lucide-react";
import { SpendingBar } from "./SpendingBar";

export const SpendingAnalysis = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold text-gray-800">Spending Analysis</h2>
      <PieChart className="text-gray-600" size={24} />
    </div>
    <div className="space-y-3">
      <SpendingBar category="Groceries" percentage="75" color="bg-blue-500" />
      <SpendingBar
        category="Entertainment"
        percentage="25"
        color="bg-green-500"
      />
    </div>
  </div>
);

import React, { useState } from "react";
import { DollarSign } from "lucide-react";

export const BudgetLimitSection = ({ dispatch, budgetlimit }) => {
  const [budgetLimit, setBudgetLimit] = useState("");
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-800">Budget Limit</h2>
          <p className="text-red-500 text-xl font-bold">${budgetlimit}</p>
        </div>
        <div className="flex items-center space-x-2">
          <DollarSign className="text-gray-500" size={20} />
          <input
            value={budgetLimit}
            onChange={(e) => setBudgetLimit(e.target.value)}
            type="number"
            className="border rounded-lg px-3 py-2 w-32"
            placeholder="Set limit"
          />
          <button
            onClick={(e) => {
              dispatch({ type: "SET_BUDGET_LIMIT", payload: budgetLimit });
              setBudgetLimit("");
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Set
          </button>
        </div>
      </div>
    </div>
  );
};

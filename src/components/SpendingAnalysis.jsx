import React from "react";
import { PieChart } from "lucide-react";
import { SpendingBar } from "./SpendingBar";

export const SpendingAnalysis = ({ expenses }) => {
  const calculatePercentage = (amount) => {
    const expensesTotal = expenses.reduce(
      (total, item) => total + item.amount,
      0
    );
    return Math.round((amount / expensesTotal) * 100);
  };
  const chooseRandomColor = () => {
    const colors = [
      "bg-red-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-orange-500",
      "bg-teal-500",
      "bg-indigo-500",
      "bg-cyan-500",
      "bg-lime-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Spending Analysis
        </h2>
        <PieChart className="text-gray-600" size={24} />
      </div>
      <div className="space-y-3">
        {expenses.map((expense) => (
          <SpendingBar
            key={expense.id}
            category={expense.category}
            percentage={calculatePercentage(expense.amount)}
            color={chooseRandomColor()}
          />
        ))}
      </div>
    </div>
  );
};

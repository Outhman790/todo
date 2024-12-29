import React from "react";

export const Header = ({ dispatch, items }) => {
  const totalIncome = items.incomes.reduce(
    (total, item) => total + item.amount,
    0
  );
  const totalExpenses = items.expenses.reduce(
    (total, item) => total + item.amount,
    0
  );
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Budget Tracker</h1>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Total Balance</p>
          <p className="text-4xl font-bold text-green-600">{`$${Number(
            totalIncome - totalExpenses
          )}`}</p>
        </div>
        <button
          onClick={() => dispatch({ type: "RESET_ALL" })}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Reset Tracker
        </button>
      </div>
    </div>
  );
};

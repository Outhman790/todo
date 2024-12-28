// src/components/ExpensesSection.jsx
import React from "react";
import { Filter } from "lucide-react";
import { AddItemForm } from "./AddItemForm";
import { ItemList } from "./ItemList";

export const ExpensesSection = () => {
  const expenseItems = [
    { name: "Groceries", description: "Monthly essentials", amount: "450.00" },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Expenses</h2>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>
      <AddItemForm placeholder="Expense category" buttonColor="bg-blue-500" />
      <ItemList items={expenseItems} textColor="text-red-600" />
    </div>
  );
};

// src/components/IncomeSection.jsx
import React from "react";
import { AddItemForm } from "./AddItemForm";
import { ItemList } from "./ItemList";

export const IncomeSection = () => {
  const incomeItems = [
    { name: "Salary", description: "Monthly income", amount: "3,500.00" },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Income Sources
      </h2>
      <AddItemForm placeholder="Income source" buttonColor="bg-green-500" />
      <ItemList items={incomeItems} textColor="text-green-600" />
    </div>
  );
};

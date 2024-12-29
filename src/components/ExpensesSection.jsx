import React from "react";
import { Filter } from "lucide-react";
import { AddItemForm } from "./AddItemForm";
import { ItemList } from "./ItemList";

export const ExpensesSection = ({ dispatch, expenseItems, budgetLimit }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Expenses</h2>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
          <Filter size={20} />
          <span>Filter</span>
        </button>
      </div>
      <AddItemForm
        placeholder="Expense Name"
        buttonColor="bg-blue-500"
        dispatch={dispatch}
        isExpense={true}
        budgetLimit={budgetLimit}
        expenseItems={expenseItems}
      />
      <ItemList
        items={expenseItems}
        dispatch={dispatch}
        isExpense={true}
        textColor="text-red-600"
      />
    </div>
  );
};

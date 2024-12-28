// src/components/AddItemForm.jsx
import React from "react";
import { PlusCircle } from "lucide-react";

export const AddItemForm = ({ placeholder, buttonColor }) => (
  <div className="flex items-center space-x-2 mb-4">
    <input
      type="text"
      placeholder={placeholder}
      className="border rounded-lg px-3 py-2 flex-1"
    />
    <input
      type="number"
      placeholder="Amount"
      className="border rounded-lg px-3 py-2 w-32"
    />
    <button
      className={`${buttonColor} text-white p-2 rounded-lg hover:opacity-90`}
    >
      <PlusCircle size={24} />
    </button>
  </div>
);

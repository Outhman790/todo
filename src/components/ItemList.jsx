import React from "react";
import { Trash2 } from "lucide-react";

export const ItemList = ({ items, textColor, isExpense, dispatch }) => {
  const handleRemoveItem = (id) => {
    isExpense
      ? dispatch({ type: "REMOVE_EXPENSE", payload: id })
      : dispatch({ type: "REMOVE_INCOME", payload: id });
  };
  return (
    items && (
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-lg animate-[fadeIn_0.3s_ease-in-out] transition-all duration-300"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">{item.category}</p>
            </div>
            <div className="flex items-center space-x-3">
              <p className={`font-semibold ${textColor}`}>${item.amount}</p>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

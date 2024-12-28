// src/components/ItemList.jsx
import React from "react";
import { Trash2 } from "lucide-react";

export const ItemList = ({ items, textColor }) => (
  <div className="space-y-2">
    {items.map((item, index) => (
      <div
        key={index}
        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
      >
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
        <div className="flex items-center space-x-3">
          <p className={`font-semibold ${textColor}`}>${item.amount}</p>
          <button className="text-red-500 hover:text-red-600">
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    ))}
  </div>
);

import React, { useReducer } from "react";
import { PlusCircle } from "lucide-react";

export const AddItemForm = ({
  dispatch,
  placeholder,
  buttonColor,
  isExpense,
}) => {
  const expenseCategories = [
    "Housing",
    "Food",
    "Transportation",
    "Health & Fitness",
    "Entertainment",
    "Clothing",
    "Education",
    "Personal Care",
    "Miscellaneous",
    "Travel",
  ];
  const incomeCategories = [
    "Salary",
    "Bonus",
    "Freelance Income",
    "Investment Income",
    "Rental Income",
    "Dividends",
    "Interest Income",
    "Gifts",
    "Pensions",
    "Other",
  ];

  const addExpenseorIncome = (data) => {
    isExpense
      ? dispatch({ type: "ADD_EXPENSE", payload: data })
      : dispatch({ type: "ADD_INCOME", payload: data });
    formDispatch({ type: "RESET" });
  };
  const initialState = {
    id: Date.now(),
    name: "",
    category: "",
    amount: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_AMOUNT":
        return { ...state, amount: action.payload };
      case "SET_CATEGORY":
        return { ...state, category: action.payload };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };
  const [state, formDispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        value={state.name}
        onChange={(e) =>
          formDispatch({ type: "SET_NAME", payload: e.target.value })
        }
        type="text"
        placeholder={placeholder}
        className="border rounded-lg px-3 py-2 flex-1"
      />
      <input
        value={state.amount}
        onChange={(e) =>
          formDispatch({ type: "SET_AMOUNT", payload: Number(e.target.value) })
        }
        type="number"
        placeholder="Amount"
        className="border rounded-lg px-3 py-2 w-32"
      />
      <select
        onChange={(e) =>
          formDispatch({ type: "SET_CATEGORY", payload: e.target.value })
        }
        className="border rounded-lg py-2 px-3"
        id="expenseCategories"
        value={state.category}
      >
        <option value="" disabled>
          {`Select an ${isExpense ? "expense" : "income"} category`}
        </option>
        {isExpense
          ? expenseCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))
          : incomeCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
      </select>

      <button
        onClick={() => addExpenseorIncome(state)}
        className={`${buttonColor} text-white p-2 rounded-lg hover:opacity-90`}
      >
        <PlusCircle size={24} />
      </button>
    </div>
  );
};

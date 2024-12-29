import React, { useReducer, useMemo } from "react";
import { PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";

export const AddItemForm = ({
  dispatch,
  placeholder,
  buttonColor,
  isExpense,
  budgetLimit,
  expenseItems,
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
  const totalExpenses = useMemo(() => {
    return expenseItems?.reduce((total, item) => total + item.amount, 0);
  });
  // Make the form add to expenses if isExpense is true, and add to incomes if isExpense is false.
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    addExpenseorIncome(state);
  };
  return (
    <div className="flex items-center justify-between space-x-2 mb-4">
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col gap-1">
          <input
            {...register("name", {
              required: true,
              validate: {
                minLength: (value) =>
                  value.length >= 2 ||
                  "Task name must be at least 2 characters long",
                maxLength: (value) =>
                  value.length <= 25 ||
                  "Task name must be at most 25 characters long",
              },
              pattern: {
                value: /^[a-zA-Z]*$/,
                message: "Task name must only contain letters.",
              },
            })}
            value={state.name}
            onChange={(e) =>
              formDispatch({ type: "SET_NAME", payload: e.target.value })
            }
            type="text"
            placeholder={placeholder}
            className="border rounded-lg px-3 py-2 flex-1"
          />
          <small className="text-red-500 h-3">{errors.name?.message}</small>
        </div>
        <div className="flex flex-col gap-1">
          <input
            {...register("amount", {
              required: true,
              validate: {
                min: (value) =>
                  value >= 0 || "Amount must be greater than or equal to 0",
                max: (value) =>
                  value <= 1000000 ||
                  "Amount must be less than or equal to 1,000,000",
              },
            })}
            value={state.amount}
            onChange={(e) =>
              formDispatch({
                type: "SET_AMOUNT",
                payload: Number(e.target.value),
              })
            }
            type="number"
            placeholder="Amount"
            className="border rounded-lg px-3 py-2 w-32"
          />

          <small className="text-red-500 h-3">{errors.amount?.message}</small>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
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
          disabled={totalExpenses > budgetLimit}
          onClick={handleSubmit(onSubmit)}
          className={`${buttonColor} text-white p-2 rounded-lg hover:opacity-90`}
        >
          <PlusCircle size={24} />
        </button>
        <small
          className={
            totalExpenses > budgetLimit ? "text-red-500 h-3 block" : ""
          }
        >
          {totalExpenses > budgetLimit && "Budget limit reached!"}
        </small>
      </div>
    </div>
  );
};

import React from "react";

function Reducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_EXPENSE":
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };
      case "ADD_INCOME":
        return {
          ...state,
          incomes: [...state.incomes, action.payload],
        };
      case "REMOVE_EXPENSE":
        return {
          ...state,
          expenses: state.expenses.filter(
            (expense) => expense.id !== action.payload
          ),
        };
      case "REMOVE_INCOME":
        return {
          ...state,
          incomes: state.incomes.filter(
            (income) => income.id !== action.payload
          ),
        };
      case "SET_BUDGET_LIMIT":
        return {
          ...state,
          budgetLimit: action.payload,
        };
      case "RESET_BUDGET_LIMIT":
        return {
          ...state,
          budgetLimit: null,
        };
      case "RESET_ALL":
        return initialState;
      default:
        return state;
    }
  };
}

export default Reducer;

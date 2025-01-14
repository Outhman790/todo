import React, { useEffect, useReducer } from "react";
import { Header } from "./Header";
import { BudgetLimitSection } from "./BudgetLimitSection";
import { IncomeSection } from "./IncomeSection";
import { ExpensesSection } from "./ExpensesSection";
import { SpendingAnalysis } from "./SpendingAnalysis";
const BudgetTracker = () => {
  const initialState = {
    expenses: [],
    incomes: [],
    budgetLimit: 0,
  };

  const loadState = () => {
    const savedState = localStorage.getItem("budgetTrackerState");
    return savedState ? JSON.parse(savedState) : initialState;
  };
  const [state, dispatch] = useReducer(reducer, loadState());
  useEffect(() => {
    localStorage.setItem("budgetTrackerState", JSON.stringify(state));
  }, [state]);
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header dispatch={dispatch} items={state} />
        <BudgetLimitSection
          dispatch={dispatch}
          budgetlimit={state.budgetLimit}
        />
        <IncomeSection dispatch={dispatch} incomesItems={state.incomes} />
        <ExpensesSection
          dispatch={dispatch}
          expenseItems={state.expenses}
          budgetLimit={state.budgetLimit}
        />
        <SpendingAnalysis expenses={state.expenses} />
      </div>
    </div>
  );
};

export default BudgetTracker;

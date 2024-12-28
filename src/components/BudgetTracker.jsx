import React from "react";
import { useReducer } from "react";
import { Header } from "./Header";
import { BudgetLimitSection } from "./BudgetLimitSection";
import { IncomeSection } from "./IncomeSection";
import { ExpensesSection } from "./ExpensesSection";
import { SpendingAnalysis } from "./SpendingAnalysis";
const BudgetTracker = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />
        <BudgetLimitSection />
        <IncomeSection />
        <ExpensesSection />
        <SpendingAnalysis />
      </div>
    </div>
  );
};

export default BudgetTracker;

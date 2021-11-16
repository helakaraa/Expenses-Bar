import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App= () => {
  const DUMMYEXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.67,
      date: new Date(2021, 1, 28),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 29.67,
      date: new Date(2021, 3, 28),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 4, 28),
    },
    {
      id: "e4",
      title: "Home Insurance",
      amount: 194.67,
      date: new Date(2021, 6, 28),
    },
  ];
  const [expenses, setExpenses]= useState(DUMMYEXPENSES);
  const addExpenseHandler = expense => {
     setExpenses((prevexpenses)=> { return [expense, ...prevexpenses]})
   
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;

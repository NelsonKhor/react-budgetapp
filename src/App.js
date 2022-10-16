import React from 'react';
import './App.css';
import BudgetList from './components/BudgetList';

function App() {
  const budgetData = [
    {
      id : 1,
      item : 'cloth',
      amount : 10.10,
    },
    {
      id : 2,
      item : 'pants',
      amount : 8.90,
    },
    {
      id : 3,
      item : 'socks',
      amount : 6.45,
    }
  ];

  return (
    <div>
      <h1>Budgeting App</h1>
      <BudgetList budgetData={budgetData}/>
    </div>
  );
}

export default App;

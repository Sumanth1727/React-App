import logo from './logo.svg';
import './App.css';

import Expenses from './components/Expense';
function App() {
  const expense = [
    {title: 'Toilet Paper',amount: 94.12,date: new Date(2020, 7, 14),},
    { title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    { title: 'Car Insurance',amount: 294.67,date: new Date(2021, 2, 28),},
    { title: 'New Desk (Wooden)', amount: 450,date: new Date(2021, 5, 12), },
  ];
  return (
    <div >
      <h2>Let's get started</h2>
      <Expenses items={expense}/>
    </div>
  );
}

export default App;

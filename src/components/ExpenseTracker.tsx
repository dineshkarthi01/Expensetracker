import React, { useState } from 'react';

interface Expense {
  id: number;
  amount: number;
  timestamp: string;
}

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(0);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleAddExpense = () => {
    if (!amount) {
      alert('Please enter an amount.');
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      amount: Number(amount),
      timestamp: new Date().toLocaleString(),
    };

    setExpenses([...expenses, newExpense]);
    setBalance(balance + Number(amount));
    setAmount('');
  };

  const handleSubtractExpense = () => {
    if (!amount) {
      alert('Please enter an amount.');
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      amount: -Number(amount),
      timestamp: new Date().toLocaleString(),
    };

    setExpenses([...expenses, newExpense]);
    setBalance(balance - Number(amount));
    setAmount('');
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <div>
        <h2>Balance: ${balance}</h2>

       

          <div>
            <label>Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>

          <button onClick={handleAddExpense}>Add Expense</button>
          <button onClick={handleSubtractExpense}>Remove Expense</button>
       
      </div>

      <div>
        <h2>Transaction Details</h2>

        {expenses.length === 0 ? (
          <p>No transactions recorded.</p>
        ) : (
          <ul>
            {expenses.map((expense) => (
              <li key={expense.id}>
                ${expense.amount} ({expense.timestamp})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExpenseTracker;

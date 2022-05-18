import Expenses from './components/expenses/Expenses'
import { useState } from 'react'
import NewExpense from './components/newExpense/NewExpense'
import styled from 'styled-components'
const DummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]
function App() {
  const [expensesData, setExpensesData] = useState(DummyExpenses)
  const addExpenseHandler = (newExpenseData) => {
    setExpensesData((prevExpenses) => [newExpenseData, ...prevExpenses])
  }

  // a closer look at jsx
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expenses, { expenses: expenses })
  // )
  return (
    <div>
      <Title>Expenses Tracker</Title>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses expenses={expensesData} />
    </div>
  )
}

export default App
const Title = styled.h1`
  font-family: 'Lora', serif;
  font-weight: 600;
  text-align: center;
  font-size: 2.5rem;
`

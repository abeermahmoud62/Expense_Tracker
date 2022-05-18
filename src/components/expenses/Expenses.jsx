import styled from 'styled-components'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
function Expenses({ expenses }) {
  const [filteredExpenses, setFilteredExpenses] = useState('2021')
  const handleFilteredDate = (filteredDate) => {
    setFilteredExpenses(filteredDate)
  }
  const filteredExpensesList = expenses.filter(
    (expense) => JSON.stringify(expense.date.getFullYear()) === filteredExpenses
  )
  return (
    <Wrap>
      <ExpenseFilter
        selected={filteredExpenses}
        onFilterDate={handleFilteredDate}
        filteredExpensesList={filteredExpensesList}
      />
      <ExpensesChart expenses={filteredExpensesList} />
      <ExpensesList filteredExpensesList={filteredExpensesList} />
    </Wrap>
  )
}

export default Expenses

const Wrap = styled.div`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`

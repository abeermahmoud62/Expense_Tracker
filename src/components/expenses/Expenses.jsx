import ExpenseItem from './ExpenseItem'
import styled from 'styled-components'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'
function Expenses({ expenses }) {
  const [filteredExpenses, setFilteredExpenses] = useState('all')
  const handleFilteredDate = (filteredDate) => {
    setFilteredExpenses(filteredDate)
  }
  const filteredExpensesList = expenses.filter(
    (expense) => JSON.stringify(expense.date.getFullYear()) === filteredExpenses
  )
  const FilteredArr = filteredExpensesList.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )
  })
  const ExpensesArr = expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )
  })
  return (
    <Wrap>
      <ExpenseFilter
        selected={filteredExpenses}
        onFilterDate={handleFilteredDate}
      />
      {filteredExpenses === 'all' ? ExpensesArr : FilteredArr}
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

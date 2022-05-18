import React from 'react'
import styled from 'styled-components'
import ExpenseItem from './ExpenseItem'
const ExpensesList = ({ filteredExpensesList }) => {
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

  return (
    <Container>
      {FilteredArr.length ? FilteredArr : <Msg>No expenses found</Msg>}
    </Container>
  )
}

export default ExpensesList

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Msg = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
`

import { useState } from 'react'
import styled from 'styled-components'
import ExpenseForm from './ExpenseForm'
const NewExpense = ({ onAddNewExpense }) => {
  const [showForm, setShowForm] = useState(false)
  const SaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 1000000).toString(),
    }
    onAddNewExpense(expenseData)
  }
  const clickHandler = () => {
    setShowForm((prev) => !prev)
  }
  const cancelHandler = () => {
    setShowForm(false)
  }
  return (
    <Container>
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseData}
          setShowForm={setShowForm}
          onCancelHandler={cancelHandler}
        />
      ) : (
        <Button onClick={clickHandler}>Add Expenses</Button>
      )}
    </Container>
  )
}

export default NewExpense

const Container = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`
const Button = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;
  &:hover {
    background-color: #510674;
    border-color: #510674;
  }
`

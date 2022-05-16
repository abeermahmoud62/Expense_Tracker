import styled from 'styled-components'
import ExpenseForm from './ExpenseForm'
const NewExpense = ({ onAddNewExpense }) => {
  const SaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 1000000).toString(),
    }
    onAddNewExpense(expenseData)
  }
  return (
    <Container>
      <ExpenseForm onSaveExpenseData={SaveExpenseData} />
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

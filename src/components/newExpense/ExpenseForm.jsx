import styled from 'styled-components'
import { useState } from 'react'
const ExpenseForm = ({ onSaveExpenseData }) => {
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    date: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    onSaveExpenseData({ ...expense, date: new Date(expense.date) })
    setExpense({ title: '', amount: '', date: '' })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Wrapper>
          <Label>Title</Label>
          <Input
            type="text"
            placeholder="Expense Title"
            name="title"
            onChange={handleChange}
            value={expense.title}
          />
        </Wrapper>
        <Wrapper>
          <Label>Amount</Label>
          <Input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Expense Amount"
            name="amount"
            onChange={handleChange}
            value={expense.amount}
          />
        </Wrapper>
        <Wrapper>
          <Label>Date</Label>
          <Input
            type="date"
            min="2020-01-01"
            max="2020-12-31"
            name="date"
            onChange={handleChange}
            value={expense.date}
          />
        </Wrapper>
      </Container>
      <ButtonContainer>
        <button type="submit">Add Expense</button>
      </ButtonContainer>
    </Form>
  )
}

export default ExpenseForm

const Form = styled.form``
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`

const Wrapper = styled.div``
const Input = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`
const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`
const ButtonContainer = styled.div`
  text-align: right;
  button {
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
  }
`

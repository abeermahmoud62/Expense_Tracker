// import { useState } from 'react'
import styled from 'styled-components'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props) {
  return (
    <Wrap>
      <ExpenseDate date={props.date} />
      <Info className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </Info>
    </Wrap>
  )
}

export default ExpenseItem

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
  h2 {
    color: #3a3a3a;
    font-size: 1rem;
    flex: 1;
    margin: 0 1rem;
    color: white;
  }
  div {
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #c85c5c;
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 12px;
  }
  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;

    h2 {
      font-size: 1.25rem;
    }

    div {
      font-size: 1.25rem;
      padding: 0.5rem 1.5rem;
    }
  }
`
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #2f3a32;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`

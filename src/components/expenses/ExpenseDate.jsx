import styled from 'styled-components'
function ExpenseDate({ date }) {
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const year = date.getFullYear()
  return (
    <Container>
      <Date fontSize={'0.75rem'} fontWeight={'bold'}>
        {month}
      </Date>
      <Date fontSize={'0.75rem'}>{year}</Date>
      <Date fontSize={'1.5rem'} fontWeight={'bold'}>
        {day}
      </Date>
    </Container>
  )
}

export default ExpenseDate

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`
const Date = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`

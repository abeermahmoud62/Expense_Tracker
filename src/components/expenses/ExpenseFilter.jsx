import styled from 'styled-components'

const ExpenseFilter = ({ onFilterDate, selected }) => {
  const handleSelect = (e) => {
    const { value } = e.target
    onFilterDate(value)
  }

  return (
    <Container>
      <Wrapper>
        <label>Filter by year</label>
        <select value={selected} name="year" id="year" onChange={handleSelect}>
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </Wrapper>
    </Container>
  )
}

export default ExpenseFilter

const Container = styled.div`
  padding: 0 1rem;
  color: #fff;
`
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  select {
    font: inherit;
    padding: 0.5rem 3rem;
    font-weight: bold;
    border-radius: 6px;
  }
`

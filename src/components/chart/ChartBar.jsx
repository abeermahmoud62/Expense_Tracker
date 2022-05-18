import React from 'react'
import styled from 'styled-components'
const ChartBar = (props) => {
  let barFillHeight = '0%'
  if (props.maxValue) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
  }
  return (
    <Container>
      <Wrapper>
        <ChartBarFill fillHeight={barFillHeight}></ChartBarFill>
      </Wrapper>
      <Label>{props.label}</Label>
    </Container>
  )
}

export default ChartBar

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #fafdd6;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const ChartBarFill = styled.div`
  background-color: #ffd36e;
  width: 100%;
  height: ${(props) => props.fillHeight};
  transition: all 0.3s ease-out;
`
const Label = styled.p`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`

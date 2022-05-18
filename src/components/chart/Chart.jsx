import React from 'react'
import styled from 'styled-components'
import ChartBar from './ChartBar'
const Chart = ({ dataPoints }) => {
  const totalMax = Math.max(...dataPoints.map((point) => point.value))
  return (
    <Container>
      {dataPoints.map((dataPoint, index) => (
        <ChartBar
          key={index}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </Container>
  )
}

export default Chart

const Container = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #7e8f83;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`

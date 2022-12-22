import React from 'react'
import { Progress, Container } from "./ProgressBar.styles";

const ProgressBar = ({coin}) => {
  return (
    <Container width={100}>
        <Progress percent={(coin.circulating_supply / coin.total_supply) * 100} />
    </Container>
  )
}

export default ProgressBar; 
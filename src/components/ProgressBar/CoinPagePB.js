import React from 'react'
import { Progress, Container } from "./ProgressBar.styles";

const CoinPagePB = ({coinData}) => {
  return (
    <Container width={100}>
        <Progress percent={coinData.sentiment_votes_up_percentage / 100 * 100} />
    </Container>
  )
}

export default CoinPagePB; 
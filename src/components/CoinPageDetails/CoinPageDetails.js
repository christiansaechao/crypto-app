import React, { Component } from 'react';
import {
    DetailsContainer,
    LeftContainer,
    RightContainer
} from './CoinPageDetails.styles'; 

export class CoinPageDetails extends Component {
  render() {
    return (
      <DetailsContainer>
        <LeftContainer>Left Container</LeftContainer>
        <RightContainer>Right Container</RightContainer>
      </DetailsContainer>
    )
  }
}

export default CoinPageDetails
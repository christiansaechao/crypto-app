import React, { Component } from "react";
import Chart from "./Chart/Chart";
import {
  ChartContainer,
  Wrapper,
  TextWrapper,
} from "./LandingPageCharts.styles";

export class LandingPageCharts extends Component {
  render() {
    const { chartsData } = this.props;

    return (
      <>
        {chartsData && (
          <ChartContainer>
            <Wrapper>
              <TextWrapper>
                Today's BTC Volume $
                {chartsData.total_volumes[
                  chartsData.total_volumes.length - 1
                ][1].toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </TextWrapper>
              <Chart chartsData={chartsData} type={"line"} />
            </Wrapper>
            <Wrapper>
              <TextWrapper>
                Today's BTC Price $
                {chartsData.prices[
                  chartsData.prices.length - 1
                ][1].toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TextWrapper>
              <Chart chartsData={chartsData} type={"bar"} />
            </Wrapper>
          </ChartContainer>
        )}
      </>
    );
  }
}

export default LandingPageCharts;

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeChartType, changeDateRange, getChartsData } from "store/getChartsData/actions";
import Chart from "../LandingPageCharts/Chart/Chart";

import {
  Wrapper,
  DropdownsContainer,
  ButtonContainer,
  RightButtons,
  LeftButtons,
} from "./CoinPageChart.styles";

const CoinPageChart = ({ chartsData }) => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency); 
  const [leftButtons, setLeftButtons] = useState({
    volume: false,
    price: true,
  });
  const [rightButtons, setRightButtons] = useState({
    day: false, 
    week: false, 
    month: true,
    threeMonths: false, 
    year: false,
  }); 
  const chartType = useSelector((state) => state.chartsData.chartType);

  useEffect(() => {
    dispatch(getChartsData());
  }, [selectedCurrency]);

  const changeChart = (chartType) => {
    dispatch(changeChartType(chartType));
    setLeftButtons({ volume: !leftButtons.volume, price: !leftButtons.price });
  };

  const dateRangeToRightButtons = {
    1: {day: true, week: false, month: false, threeMonths: false, year: false},
    7: {day: false, week: true, month: false, threeMonths: false, year: false},
    30: {day: false, week: false, month: true, threeMonths: false, year: false},
    90: {day: false, week: false, month: false, threeMonths: true, year: false},
    365: {day: false, week: false, month: false, threeMonths: false, year: true}
  }

  const changeDate = (dateRange) => {
    dispatch(changeDateRange(dateRange));
    setRightButtons(dateRangeToRightButtons[dateRange]);
  };

  return (
    <>
      {chartsData && (
        <Wrapper>
          <DropdownsContainer>
            <LeftButtons>
              <ButtonContainer
                className="volume-btn"
                bgActive={leftButtons.volume}
                onClick={() => changeChart("volume")}
              >
                Volume
              </ButtonContainer>
              <ButtonContainer
                className="price-btn"
                bgActive={leftButtons.price}
                onClick={() => changeChart("price")}
              >
                Price
              </ButtonContainer>
            </LeftButtons>
            <RightButtons>
              <ButtonContainer className="day-btn" bgActive={rightButtons.day} onClick={() => changeDate(1)}>
                Day
              </ButtonContainer>
              <ButtonContainer className="week-btn" bgActive={rightButtons.week} onClick={() => changeDate(7)}>
                Week
              </ButtonContainer>
              <ButtonContainer className="month-btn" bgActive={rightButtons.month} onClick={() => changeDate(30)}>
                Month
              </ButtonContainer>
              <ButtonContainer className="three-months-btn" bgActive={rightButtons.threeMonths} onClick={() => changeDate(90)}>
                3 Months
              </ButtonContainer>
              <ButtonContainer className="year-btn" bgActive={rightButtons.year} onClick={() => changeDate(365)}>
                One Year
              </ButtonContainer>
            </RightButtons>
          </DropdownsContainer>
          <Chart chartsData={chartsData} chartType={chartType} />
        </Wrapper>
      )}
    </>
  );
};

export default CoinPageChart;

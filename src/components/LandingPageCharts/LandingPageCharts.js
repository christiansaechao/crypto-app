import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeChartType, changeDateRange } from "store/getChartsData/actions";
import Chart from "./Chart/Chart";
import SearchBar from "./Searchbar/LCSearchBar";
import { FaChevronDown } from "react-icons/fa";
import {
  Wrapper,
  DropdownsContainer,
  ListContainer,
  ListItem,
  Dropdown,
  ButtonContainer,
  RightButtons,
  ButtonDropdownContainer,
} from "./LandingPageCharts.styles";

const LandingPageCharts = ({ chartsData }) => {
  const dispatch = useDispatch(); 
  const [showDataType, setShowDataType] = useState(false);
  const [showDateRange, setShowDateRange] = useState(false);
  const [showCoins, setShowCoins] = useState(false);
  const currentCoin = useSelector((state) => state.chartsData.selectedCoin);
  const chartType = useSelector((state) => state.chartsData.chartType);


  const handleClick = (dropdown) => {
    switch (dropdown) {
      case "data-type":
        setShowDataType(!showDataType);
        setShowDateRange(false); 
        break;
      case "date-range":
        setShowDateRange(!showDateRange);
        setShowDataType(false); 
        break;
      case "coins":
        setShowCoins(!showCoins);
        break;
      default:
        return null;
    }
  };

  const changeChart = (chartType) => {
    dispatch(changeChartType(chartType)); 
  }
  const changeDate = (dateRange) => {
    dispatch(changeDateRange(dateRange)); 
  }

  return (
    <>
      {chartsData && (
        <Wrapper>
          <DropdownsContainer>
            <ButtonDropdownContainer>
              <ButtonContainer onClick={() => handleClick("coins")}>
                {currentCoin}
                <FaChevronDown className="chevron" />
              </ButtonContainer>
              {showCoins && (
                <Dropdown>
                  <SearchBar />
                </Dropdown>
              )}
            </ButtonDropdownContainer>
            <RightButtons>
              <ButtonContainer onClick={() => handleClick("data-type")}>
                Data Type
                <FaChevronDown className="chevron" />
                {showDataType && (
                  <Dropdown>
                    <ListContainer className="left">
                      <ListItem onClick={() => changeChart('volume')}>volume</ListItem>
                      <ListItem onClick={() => changeChart('price')}>price</ListItem>
                    </ListContainer>
                  </Dropdown>
                )}
              </ButtonContainer>
              <ButtonContainer onClick={() => handleClick("date-range")}>
                Date Range
                <FaChevronDown className="chevron" />
                {showDateRange && (
                  <Dropdown>
                    <ListContainer className="right">
                      <ListItem onClick={() => changeDate(7)}>Weekly</ListItem>
                      <ListItem onClick={() => changeDate(30)}>Monthly</ListItem>
                      <ListItem onClick={() => changeDate(365)}>One Year</ListItem>
                    </ListContainer>
                  </Dropdown>
                )}
              </ButtonContainer>
            </RightButtons>
          </DropdownsContainer>
          <Chart chartsData={chartsData} chartType={chartType} />
        </Wrapper>
      )}
    </>
  );
};

export default LandingPageCharts;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'; 
import { getCoinsData, incPageNum } from "../../store/getCoinsData/actions";
import { getChartsData } from "../../store/getChartsData/actions";

import InfiniteScroll from "react-infinite-scroll-component";
import { CoinsContainer, Wrapper } from "./CoinsPage.styles";
import CoinsTable from "../../components/CoinsTable/CoinsTable";
import LandingPageCharts from "../../components/LandingPageCharts/LandingPageCharts";
import FearAndGreedIndex from "../../components/FearIndex/FearIndex";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoginButton from "../../components/LoginButton/LoginButton";
import NotificationIcon from "../../components/NotificationIcon/NotificationIcon";

const CoinsPage = (props) => {
  const coinsData = useSelector((state) => state.coinsData.data);
  const chartsData = useSelector((state) => state.chartsData.data);
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency); 

  const [hasMoreItems, setHasMoreItems] = useState(true);

  const dispatch = useDispatch(); 

  const infinite = () => {
    dispatch(incPageNum()); 
  }

  useEffect(() => {
    dispatch(getChartsData());
    dispatch(getCoinsData()); 
  }, [selectedCurrency]);

  useEffect(() => {
    dispatch(getChartsData());
    dispatch(getCoinsData()); 
  }, []);

  return (
    <>
      {coinsData && (
        <>
          <CoinsContainer>
            <Wrapper className="search-login">
              <SearchBar searchType={"main"} />
              <LoginButton />
              <NotificationIcon />
            </Wrapper>
            <Wrapper>
              <LandingPageCharts chartsData={chartsData} />
              <FearAndGreedIndex />
            </Wrapper>
            <InfiniteScroll
              dataLength={coinsData.length}
              next={() => infinite()}
              hasMore={hasMoreItems}
              loader={<h4>Loading...</h4>}
            >
              <CoinsTable coinsData={coinsData} />
            </InfiniteScroll>
          </CoinsContainer>
        </>
      )}
    </>
  )
};

export default CoinsPage; 
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoinData } from "store/getCoinData/actions";
import { useParams } from "react-router-dom";
import CoinPageChart from '../../components/CoinPageChart/CoinPageChart'; 
import CoinPageDetails from "components/CoinPageDetails/CoinPageDetails";
import CurrencyConverter from "components/CurrencyConverter/CurrencyConverter";
import { MainContainer } from './CoinPage.styles'; 
import { changeSelectedCoin } from "store/getChartsData/actions";


function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}
const CoinPage = (props) => {
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.coinData.coinData);
  const chartsData = useSelector((state) => state.chartsData.data);
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency); 

  useEffect(() => {
    const {coinId} = props.params;
    dispatch(changeSelectedCoin(coinId)); 
    dispatch(getCoinData(coinId));
  }, []); 

    return (
      <>
        {coinData && (
          <MainContainer>
            <CoinPageDetails
              coinData={coinData}
              selectedCurrency={selectedCurrency}
            />
            <CurrencyConverter
              coinData={coinData}
              selectedCurrency={selectedCurrency}
            />
            <CoinPageChart chartsData={chartsData}/>
          </MainContainer>
        )}
      </>
    );
}

export default withParams(CoinPage);

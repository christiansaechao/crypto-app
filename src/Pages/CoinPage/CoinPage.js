import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoinData } from "store/getCoinData/actions";
import { useParams } from "react-router-dom";
import CoinPageChart from '../../components/CoinPageChart/CoinPageChart'; 
import CoinPageDetails from "components/CoinPageDetails/CoinPageDetails";
import CurrencyConverter from "components/CurrencyConverter/CurrencyConverter";
import { MainContainer, DescriptionContainer } from './CoinPage.styles'; 
import { changeSelectedCoin } from "store/getChartsData/actions";
import { getCoinList } from "store/getCoinsData/actions";
import Voting from "components/Voting/Voting";


function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

const CoinPage = (props) => {
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.coinData.coinData);
  const chartsData = useSelector((state) => state.chartsData.data);
  const selectedCurrency = useSelector((state) => state.currency.selectedCurrency);
  const coinList = useSelector((state) =>
  state.coinsData.coinList); 
  const {coinId} = props.params;

  useEffect(() => {
    dispatch(changeSelectedCoin(coinId)); 
    dispatch(getCoinData(coinId));
    dispatch(getCoinList(coinId)); 
  }, [props.params]); 

  useEffect(() => {
    const { coinId } = props.params;
    dispatch(changeSelectedCoin(coinId)); 
    dispatch(getCoinData(coinId));
    dispatch(getCoinList(coinId)); 
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
            <Voting coinId={coinId} />
            <CoinPageChart chartsData={chartsData}/>
            <DescriptionContainer
            dangerouslySetInnerHTML={{ __html: coinData.description.en }}
          />
          </MainContainer>
        )}
      </>
    );
}

export default withParams(CoinPage);
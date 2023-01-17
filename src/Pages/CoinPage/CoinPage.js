import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoinData } from "store/getCoinData/actions";
import { useParams } from "react-router-dom";
import CoinPageChart from "../../components/CoinPageChart/CoinPageChart";
import CoinPageDetails from "components/CoinPageDetails/CoinPageDetails";
import CurrencyConverter from "components/CurrencyConverter/CurrencyConverter";
import { MainContainer, DescriptionContainer } from "./CoinPage.styles";
import { changeSelectedCoin } from "store/getChartsData/actions";
import { getCoinList } from "store/getCoinsData/actions";
import Voting from "components/Voting/Voting";
import useCookies from "@js-smart/react-cookie-service";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

const CoinPage = (props) => {
  const dispatch = useDispatch();
  const coinData = useSelector((state) => state.coinData.coinData);
  const chartsData = useSelector((state) => state.chartsData.data);
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );
  const { coinId } = props.params;
  const [newCookie, setNewCookie] = useState(null);

  const { check, getCookie, setCookie } = useCookies();

  // change from local host to website url later on 
  const handleVoting = () => {
    const cookie = getCookie(coinId);
    if (cookie !== "true") {
      setCookie(coinId, "true", {
        path: `http://localhost:3000/coin/${coinId}`,
        expires: 1,
      });
      setNewCookie("true");
    }
  };

  useEffect(() => {
    dispatch(changeSelectedCoin(coinId));
    dispatch(getCoinData(coinId));
    dispatch(getCoinList(coinId));
    if (check(coinId) === true) {
      setNewCookie("true");
    } else {
      setNewCookie("false");
    }
  }, [props.params.coinId]);
  

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
          <Voting
            coinId={coinId}
            coinData={coinData}
            newCookie={newCookie}
            handleVoting={handleVoting}
          />
          <CoinPageChart chartsData={chartsData} />
          <DescriptionContainer
            dangerouslySetInnerHTML={{ __html: coinData.description.en }}
          />
        </MainContainer>
      )}
    </>
  );
};
   
export default withParams(CoinPage);

import React from "react";
import {
  CoinsTableContainer,
  CoinsTableHead,
  CoinsTableRow,
  CoinsTableTH,
  CoinsTableBody,
  CoinsTableTD,
  CoinImage
} from "./CoinsTable.styles";

class CoinsTable extends React.Component {
  render() {
    const { coinsData } = this.props;
    return (
        <>
            {coinsData &&
                <CoinsTableContainer>
                    <CoinsTableHead>
                        <CoinsTableRow>
                            <CoinsTableTH>#</CoinsTableTH>
                            <CoinsTableTH>Name</CoinsTableTH>
                            <CoinsTableTH>Price</CoinsTableTH>
                            <CoinsTableTH>1h%</CoinsTableTH>
                            <CoinsTableTH>24%</CoinsTableTH>
                            <CoinsTableTH>7d%</CoinsTableTH>
                            <CoinsTableTH>24h Volume</CoinsTableTH>
                            <CoinsTableTH>Market Cap</CoinsTableTH>
                            <CoinsTableTH>Circulating/Total Supply</CoinsTableTH>
                            <CoinsTableTH>Last 7d</CoinsTableTH>
                        </CoinsTableRow>
                    </CoinsTableHead>
                    <CoinsTableBody>
                    {coinsData.map((coin, index) => {
                        return (
                            <CoinsTableRow key={coin.id}>
                                <CoinsTableTD>{index}</CoinsTableTD>
                                <CoinsTableTD><CoinImage src={coin.image}/>{coin.name}</CoinsTableTD>
                                <CoinsTableTD>{coin.current_price}</CoinsTableTD>
                                <CoinsTableTD>{coin.price_change_percentage_1h_in_currency.toFixed(2)}</CoinsTableTD>
                                <CoinsTableTD>{coin.price_change_percentage_24h_in_currency.toFixed(2)}</CoinsTableTD>
                                <CoinsTableTD>{coin.price_change_percentage_7d_in_currency.toFixed(2)}</CoinsTableTD>
                                <CoinsTableTD>{coin.total_volume.toFixed(2)}</CoinsTableTD>
                                <CoinsTableTD>{coin.market_cap.toFixed(2)}</CoinsTableTD>
                                <CoinsTableTD>{
                                    coin.circulating_supply === coin.total_supply ? Math.trunc(coin.circulating_supply) : Math.trunc(coin.circulating_supply) + "/" + Math.trunc(coin.total_supply)
                                    }
                                    </CoinsTableTD>
                                {/* implementing sparkline graph later <CoinsTableTD>{coin.sparkline_in_7d}</CoinsTableTD> */}
                            </CoinsTableRow>
                        )
                    })}
                    </CoinsTableBody>
                </CoinsTableContainer>
            }
        </>
    );
  }
}

// {coinsData.map((coin) => {
//     return <div>{coin.id}</div>
// })}

export default CoinsTable;

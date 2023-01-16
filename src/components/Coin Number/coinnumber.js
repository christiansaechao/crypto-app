import React from "react";
import { Number, Up, Down } from "./styles.coinnumber";



const CoinNumber= ({
  number
}) => {
  return (
    <Number title={`${number}%`} number={number}>
      {number?.toFixed(2)}%{number > 0 ? <Up /> : <Down />}
    </Number>
  );
};

export default CoinNumber;

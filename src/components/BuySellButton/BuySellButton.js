import React from "react";
import { MainContainer, Button } from "./styles.BuySellButton";

const BuySellButton = () => {
  return (
    <MainContainer>
      <a href="http://www.google.com">
        <Button>Buy</Button>
      </a>
      <a href="http://www.google.com">
        <Button>Sell</Button>
      </a>
    </MainContainer>
  );
};

export default BuySellButton;

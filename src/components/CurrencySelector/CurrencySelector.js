import React from 'react';
import { CurrencySelectorContainer, Carot, DollarSymbol, Currency } from './CurrencySelector.styles'; 

const CurrencySelector = () => {
  return (
    <CurrencySelectorContainer>
        <DollarSymbol><div>$</div></DollarSymbol>
        <Currency>USD</Currency>
        <Carot>^</Carot>
    </CurrencySelectorContainer>
  )
}

export default CurrencySelector; 
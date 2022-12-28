import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCurrencies, changeSelectedCurrency } from "store/selectedCurrency/actions";
import {
  CurrencySelectorContainer,
  Carot,
  DollarSymbol,
  Currency,
} from "./CurrencySelector.styles";
import CurrencyDropdown from "./CurrencyDropdown/CurrencyDropdown";
import { FaCaretDown } from "react-icons/fa";
const CurrencySelector = () => {
  const [showDropDown, setShowDropDown] = useState(false); 

  const dispatch = useDispatch();
  const allCurrencies = useSelector(
    (state) => state.currency.allCurrencies
  );
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  ); 

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleItemClick = (item) => {
    item = item.toUpperCase();
    dispatch(changeSelectedCurrency(item)); 
  };

  useEffect(() => {
    dispatch(getAllCurrencies());
  }, []);

  return (
    <>
      <CurrencySelectorContainer onClick={handleClick}>
        <DollarSymbol>
          <div>$</div>
        </DollarSymbol>
        <Currency>{selectedCurrency}</Currency>
        {showDropDown && (
          <CurrencyDropdown
            allCurrencies={allCurrencies}
            handleItemClick={handleItemClick}
          />
        )}
        <Carot>
          <FaCaretDown />
        </Carot>
      </CurrencySelectorContainer>
    </>
  );
};

export default CurrencySelector;

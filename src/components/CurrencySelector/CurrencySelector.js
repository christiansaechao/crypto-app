import React, { Component } from "react";
import axios from "axios";
import {
  CurrencySelectorContainer,
  Carot,
  DollarSymbol,
  Currency,
} from "./CurrencySelector.styles";
import CurrencyDropdown from './CurrencyDropdown/CurrencyDropdown'; 
import { FaCaretDown } from "react-icons/fa";
export class CurrencySelector extends Component {
  state = {
    allCurrencies: null,
    selectedCurrency: 'USD',
    showDropDown: false
  };

  getAllCurrencies = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`
      );
      this.setState({ allCurrencies: data });
    } catch (err) {
      console.log(err.error);
    }
  };

  handleClick = () => {
    this.setState({ showDropDown: !this.state.showDropDown })
  }

  handleItemClick = (item) => {
    item = item.toUpperCase();
    this.setState({ selectedCurrency: item });
    this.props.handleCurrencyChange(item);
  }

  componentDidUpdate(){ 
  }

  componentDidMount(){
    this.getAllCurrencies(); 
  }

  render() { 
    const { selectedCurrency, allCurrencies } = this.state;
    const { handleClick, handleItemClick } = this;
    
    return (
      <>
        <CurrencySelectorContainer onClick={handleClick}>
          <DollarSymbol>
            <div>$</div>
          </DollarSymbol>
          <Currency>{selectedCurrency}</Currency>
          {this.state.showDropDown && <CurrencyDropdown allCurrencies={allCurrencies} handleItemClick={handleItemClick} /> }
          <Carot>
            <FaCaretDown />
          </Carot>
        </CurrencySelectorContainer>
      </>
    );
  }
}

export default CurrencySelector;

import React from 'react'; 
import { Dropdown, ListContainer, ListItem } from './CurrencyDropdown.styles'; 

const CurrencyDropdown = ({allCurrencies, handleItemClick}) => {
  const mutatableVar = [...allCurrencies]; 
  return (
    <Dropdown>
        <ListContainer>
            {mutatableVar.sort().map((item) => {
                return <ListItem key={item} onClick={() => handleItemClick(item)}>{item.toUpperCase()}</ListItem>
            })}
        </ListContainer>
    </Dropdown>
  )
}

export default CurrencyDropdown; 
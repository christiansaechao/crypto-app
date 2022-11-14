import React from 'react'
import { ThemeChangerIcon } from './ThemeChanger.styles'; 
import icon from '../../images/ThemeChanger.png'; 

const ThemeChanger = (props) => {
  return (
    <ThemeChangerIcon src={icon} onClick={() => props.handleThemeChange() } />
  )
}

export default ThemeChanger; 
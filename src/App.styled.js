import {createGlobalStyle} from 'styled-components'; 

export const GlobalStyles = createGlobalStyle `
    body{
        margin: 0; 
        box-sizing: border-box; 
        font-family: 'Poppins', sans-serif;
        height: 1920px;  
        width: 100%;
        background: ${props => props.theme.main}
    }
`; 

export const DarkTheme = {
    main: '#191b1f',
    secondary: '#1f2128',
    textColor: '#fff'
}

export const LightTheme = {
    main: '#f0f0f0',
    secondary: '#fff',
    textColor: '#000'
}
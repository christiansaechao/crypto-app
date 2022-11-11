import {createGlobalStyle} from 'styled-components'; 

export const GlobalStyles = createGlobalStyle `
    body{
        margin: 0; 
        box-sizing: border-box; 
        font-family: 'Poppins', sans-serif;
        height: 1920px;  
        width: 100%;
        background-color: #1f2128;
    }
`; 

export const theme = {
    main: '#fff',
    secondary: '#000'
}
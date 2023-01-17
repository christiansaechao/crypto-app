import styled, {createGlobalStyle} from 'styled-components'; 

export const GlobalStyles = createGlobalStyle `
    body{
        box-sizing: border-box; 
        font-family: 'Poppins', sans-serif;
        width: 100%;
        margin: 0 auto; 
        background: ${props => props.theme.main}; 
        margin-bottom: 30px; 
    }
`;

export const MainContainer = styled.div`
    display: flex;
`;

export const ContentContainer = styled.div`
    margin-top: 10px;
    padding: 0 40px;
    width: 100%;
`; 

export const DarkTheme = {
    main: '#161616',
    secondary: '#1B1B1B',
    textColor: '#fff',
    greyText: '#272727',
    orange: '#FFAF2C'
}

export const LightTheme = {
    main: '#f0f0f0',
    secondary: '#fff',
    textColor: '#000',
    greyText: '#272727',
    orange: '#FFAF2C'
}
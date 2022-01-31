import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./Images/tropical-beach-sea-sun-sky.jpg";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-image: url(${BGImage});
    background-size: cover;
    marign: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

*{
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}

`;

export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
        color: #fff;
        background-color: black;
    }
    
    .score {
        color: black;
        background-color: white;
        font-size: 2rem;
        margin: 0;
    }
    
    h1 {
        font-family: Fascinate Inline;
        background-image: linear-gradiet(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        --moz-background-clip: text;
        --moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }
`;
    
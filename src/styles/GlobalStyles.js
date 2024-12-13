import { createGlobalStyle } from 'styled-components';
import './normalize.css';
import { COLORS } from './colors';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        font-family: "Red Hat Text", sans-serif;
        padding: 144px 24px;    
        background-color: ${COLORS.rose100}; 
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6{
        margin: 0;
    }

`;

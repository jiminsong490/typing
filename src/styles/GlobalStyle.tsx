import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: -0.25px;
        line-height: 1.24;
    }
    html, body, #__next {
        height: 100%;
    } */
    body{
        background-color: #e6e6e1;
    }
    section{
        background-color: #f4f4f4;
        border: 1px solid black;
        border-radius: 5px;
        align-items: center;
    }
    input{
        border-color: white;
    }
    form{
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 1100px;
        height: 100px;
    }
    div{
        display:flex;
        justify-content: center;

    }
    /* a, a:hover, a:active {
        color: inherit;
        text-decoration: none;
        outline: none;
    }
    body input, body button, body pre {
        background-color: transparent;
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
        font-weight: 400;
        border: none;
        outline: none;
    }
    textarea{
        font-family: 'Noto Sans KR', 'Roboto', sans-serif;
        border: none;
        outline: none;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    } */
`

export default GlobalStyle

import { createGlobalStyle, css } from "styled-components";


const style = css`
    body {
        width: 98.5vw;
        box-sizing: border-box;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
    }

    #root{
        width:  100%
    }
`


const GlobalStyle = createGlobalStyle`
    ${style}
`
export default GlobalStyle

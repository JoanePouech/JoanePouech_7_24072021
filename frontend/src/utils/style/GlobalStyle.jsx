import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
      font-size: 10px;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
    }

    h1 {
        font-size: 3rem;
        color: ${colors.secondary};
        text-align: center;
    }

    h2 {
        font-size: 1.8rem;
        color: ${colors.secondary};
    }

    p {
        font-size: 1.5rem
    }

    .remark {
        font-size: 1.1rem;
        font-style: italic
    }

`

function GlobalStyle() {  
    return <StyledGlobalStyle />
};
  
export default GlobalStyle
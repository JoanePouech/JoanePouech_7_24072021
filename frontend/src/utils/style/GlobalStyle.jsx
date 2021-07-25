import { createGlobalStyle } from 'styled-components';

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
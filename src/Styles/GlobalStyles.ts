import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,body {
        font-size: calc(60% + .8vmin);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #AAA;
    }
`;

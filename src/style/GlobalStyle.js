import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
    display: block;
    }

    body {
    line-height: 1;
    }

    * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }

    ol, ul {
    list-style: none;
    }

    blockquote, q {
    quotes: none;

    &:before, &:after {
        content: "";
        content: none;
    }
    }

    table {
    border-collapse: collapse;
    border-spacing: 0;
    }

    button {
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;

    &:active, &:focus {
        outline: none;
    }
    }

    input {
    -webkit-border-radius: 0;
    border: none;
    padding: 0;
    background-color: transparent;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
    }

    a {
    color: inherit;
    text-decoration: none;

    &:focus {
        outline: none;
    }
    }

    textarea {
    -webkit-border-radius: 0;
    -webkit-appearance: none;
    resize: none;

    &:focus {
        outline: none;
    }
    }
`;

export default GlobalStyle;

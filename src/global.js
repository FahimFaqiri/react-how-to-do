import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  #root {
    width: 100%
  }
  body {
    background: ${({ theme }) => theme.primaryBg};
    color: ${({ theme }) => theme.primaryText};
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    width: 100%;
    // justify-content: center;
    text-rendering: optimizeLegibility;
  }
    h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }

.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}
[class*="col-"] {
  width: 100%;
}
  @media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .col-l-1 {width: 8.33%;}
  .col-l-2 {width: 16.66%;}
  .col-l-3 {width: 25%;}
  .col-l-4 {width: 33.33%;}
  .col-l-5 {width: 41.66%;}
  .col-l-6 {width: 50%;}
  .col-l-7 {width: 58.33%;}
  .col-l-8 {width: 66.66%;}
  .col-l-9 {width: 75%;}
  .col-l-10 {width: 83.33%;}
  .col-l-11 {width: 91.66%;}
  .col-l-12 {width: 100%;}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .col-xl-1 {width: 8.33%;}
  .col-xl-2 {width: 16.66%;}
  .col-xl-3 {width: 25%;}
  .col-xl-4 {width: 33.33%;}
  .col-xl-5 {width: 41.66%;}
  .col-xl-6 {width: 50%;}
  .col-xl-7 {width: 58.33%;}
  .col-xl-8 {width: 66.66%;}
  .col-xl-9 {width: 75%;}
  .col-xl-10 {width: 83.33%;}
  .col-xl-11 {width: 91.66%;}
  .col-xl-12 {width: 100%;}
}
  `;

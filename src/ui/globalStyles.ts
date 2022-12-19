import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-family: 'Bebas Neue';
  color: ${Color.PRYMARY};
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}

button {
  cursor: pointer;
}

#root {
  display: flex;
  justify-content: center;
  align-self: center;
  min-height: 100vh; 
}
`;

export { GlobalStyle };

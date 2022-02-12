import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#000000e0",
  textColor: "#fff",
  headingColor: "lightblue",
};

export const lightTheme = {
  body: "#fff",
  textColor: "#000",
};

export const GlobalStyles = createGlobalStyle`
   body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    transition: .3s ease;
   }
   `;

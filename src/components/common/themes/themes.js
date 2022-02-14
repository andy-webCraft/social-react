import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#000000e0",
  textColor: "#fff",
  titleBeforeColor: "#1f1f1f",
};

export const lightTheme = {
  body: "#fff",
  textColor: "#000",
  titleBeforeColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
   body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    transition: .3s ease;
   }
   .title_wrap::before {
    border-color: transparent transparent ${(props) =>
      props.theme.titleBeforeColor} transparent;
    transition: .3s ease;
   }
   `;

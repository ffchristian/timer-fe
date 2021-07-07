import { createGlobalStyle } from "styled-components";
import { ITheme } from "./Themes";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: {theme: ITheme}) => theme.body};
    color: ${({ theme }: {theme: ITheme}) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;
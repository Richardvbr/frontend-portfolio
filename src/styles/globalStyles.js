import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body,
html {
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.background};
  font-family: ${({ theme }) => theme.font};
  font-weight: 400;
}
main {
  min-height: 100vh;
}

h1,
h2,
h3,
p,
a,
ul li,
span {
  color: ${({ theme }) => theme.textColor};
  &::selection {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.white};
  }
}
span.xml {
  color: #abb2bf;
}
p {
  font-size: 16px;
  line-height: 1.6;
}
h2 {
  position: relative;
  padding-bottom: 10px;
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.accent};
    content: '';
    height: 5px;
    width: 65px;
  }
}
ul {
  padding: 0;
}
a {
  text-decoration: none;
}
`;

export default GlobalStyle;

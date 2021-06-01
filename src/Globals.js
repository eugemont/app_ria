import { createGlobalStyle } from "styled-components";

var textHome =
  "Exercitation duis ut non aliqua. Incididunt tempor voluptate nulla anim in pariatur. Magna ipsum cupidatat sint amet non laboris sint incididunt elit amet fugiat. Eu quis ipsum deserunt amet do aliqua velit. Magna qui labore excepteur eu adipisicing excepteur labore sint velit nisi ullamco amet veniam. Sunt nostrud Lorem mollit non veniam ullamco tempor consectetur occaecat labore. Deserunt sit do voluptate amet amet aliqua sunt qui adipisicing quis magna anim et." +
  "In amet id laborum laboris. Incididunt labore elit ut fugiat duis in Lorem. Consectetur pariatur culpa eu aliquip ullamco aliqua commodo quis culpa in eiusmod. Esse dolore anim do irure amet ea magna voluptate culpa aliquip magna. In cupidatat eu est mollit. Ex elit ex aliquip labore velit consequat sint est dolore proident." +
  "Nulla duis ex amet dolor id duis ut. Aliquip in adipisicing nostrud ea excepteur elit. Id veniam sunt irure reprehenderit incididunt dolore aliquip reprehenderit eiusmod excepteur aute magna. Sint laboris nulla laboris aute. Adipisicing ullamco commodo culpa anim laborum et eiusmod ut cillum.";

var nueva = "hola";

export default {
  textHome,
  nueva,
};

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`;

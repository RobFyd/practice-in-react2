import { createElement } from "react"; //React
import { createRoot } from "react-dom/client"; //ReactDOM
// import { StrictMode } from 'react';

const element = createElement(
  "a",
  { href: "https://zrozumiecreact.pl" },
  "test"
);

const elementInJSX = <a href="https://zrozumiecreact.pl">test 3</a>;
console.log(<h1>test 2</h1>); // -> createElement('h1', {}, 'test 2')
console.log(element);
console.log(elementInJSX);

createRoot(document.getElementById("root")).render(element);

import { createElement } from 'react';
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const element = createElement(
  "a",
  { href: "https://zrozumiecreact.pl" },
  "Test"
);

createRoot(document.getElementById('root')).render(element);

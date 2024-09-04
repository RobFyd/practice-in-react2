// import { createElement } from "react"; //React.
import { createRoot } from "react-dom/client"; //ReactDOM.

const stringContent = "Hello World !";
const numberContent = 5;
const calcContent = 5 + 5;
const element = (
  <div>
    {stringContent} | {numberContent} | {calcContent} |{" "}
    {numberContent + calcContent + 5} | | {"test"} |{" "}
    {`Number: ${numberContent}`}
  </div>
);

const address = "https://www.google.com";
const linkElement = (
  <p>
    Link: <a href={address}>{address}</a>
  </p>
);

createRoot(document.getElementById("root")).render(linkElement);

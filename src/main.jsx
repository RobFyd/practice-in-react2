// import { createElement } from "react"; //React.
import { createRoot } from "react-dom/client"; //ReactDOM.

//1
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

//2
const address = "https://www.google.com";
const linkElement = (
  <p>
    Link: <a href={address}>{address}</a>
  </p>
);

//3
function getRandomNumber() {
  return Math.round(Math.random() * 100);
}

const randomNumber = (
  <div>
    <p>Random Number: {getRandomNumber()}</p>
  </div>
);

createRoot(document.getElementById("root")).render(randomNumber);

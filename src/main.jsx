// import { createElement } from "react"; //React.
import { createRoot } from "react-dom/client"; //ReactDOM.

//1 content
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

//2 link
const address = "https://www.google.com";
const linkElement = (
  <p>
    Link: <a href={address}>{address}</a>
  </p>
);

//3 function
function getRandomNumber() {
  return Math.round(Math.random() * 100); // return must be inside the function to see the result, function without return gives undefined.
}

const randomNumber = (
  <div>
    <p>Random Number: {getRandomNumber()}</p>
  </div>
);

//4 object
const person = {
  name: "John",
  age: 30,
};

const personElement = (
  <div>
    <p>Name: {person.name}</p>
    <p>Age: {person.age}</p>
  </div>
);


createRoot(document.getElementById("root")).render(personElement);

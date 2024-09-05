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

//5 array
const numbers = [1, 2, 3, 4, 5];

const numbersElement = (
  <div>
    <p>Numbers: {numbers.join(" + ")}</p>
  </div>
);

//6 other elements - one parent component - fragment - className
const paragraphElement = (
  <>
    <h1>header</h1>
    <a href="https://www.google.com" className="link">Google</a>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
      temporibus, eum obcaecati, quidem inventore tenetur dolores odio voluptate
      ad ea ab natus hic perferendis molestiae?
    </p>
  </>
);

const pElement = (
  <div>
    {paragraphElement}
    {paragraphElement}
    {paragraphElement}
  </div>
);

createRoot(document.getElementById("root")).render(pElement);


// <> </> - fragment, it is used to wrap multiple elements without adding extra nodes to the DOM.
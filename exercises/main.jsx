import ReactDOM from "react-dom/client";
import { Animal } from "/Animal.jsx";

const element = (
  <>
    <h1>Galeria zwierząt</h1>
    <Animal name="Pies" imgSrc="https://zrozumiecreact.pl/dog.jpg" />
    <Animal name="Kot" imgSrc="https://zrozumiecreact.pl/cat.jpg" />
    <Animal name="Kaczka" imgSrc="https://zrozumiecreact.pl/duck.jpg" />
  </>
);
ReactDOM.createRoot(document.getElementById("root")).render(element);

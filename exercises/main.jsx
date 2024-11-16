import ReactDOM from "react-dom/client";
import { Animal } from "./Animal";

const element = (
  <>
    <h1>Galeria zwierząt</h1>
    <Animal
      name="Pies"
      imgSrc="https://zrozumiecreact.pl/dog.jpg"
      imgWidth={300}
    />
    <Animal
      name="Kot"
      imgSrc="https://zrozumiecreact.pl/cat.jpg"
      imgWidth={250}
    />
    <Animal name="Kaczka" imgSrc="https://zrozumiecreact.pl/duck.jpg" />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);

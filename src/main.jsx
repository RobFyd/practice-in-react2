import { createRoot } from "react-dom/client"; //ReactDOM.
import { Link } from "./components/Link";

const element = (
  <>
    <h1>Our website</h1>
    <main>
      <Link text="Check our website now!" newTab={true} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi
        amet earum ullam, ipsa qui aut aliquam adipisci dolorum veniam
        asperiores, placeat eveniet corporis eaque exercitationem, ab voluptatum
        nisi necessitatibus?
      </p>
      <Link text="https://google.com" newTab={false} />
    </main>
  </>
);

createRoot(document.getElementById("root")).render(element);

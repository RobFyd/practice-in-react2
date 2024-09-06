// import { createElement } from "react"; //React.
import { createRoot } from "react-dom/client"; //ReactDOM.
import { Link } from "./components/Link";

const element = (
  <>
    <h1>Our website</h1>
    <main>
      {/* component instance */}
      <Link />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi
        amet earum ullam, ipsa qui aut aliquam adipisci dolorum veniam
        asperiores, placeat eveniet corporis eaque exercitationem, ab voluptatum
        nisi necessitatibus?
      </p>
      <Link />
    </main>
  </>
);

createRoot(document.getElementById("root")).render(element);

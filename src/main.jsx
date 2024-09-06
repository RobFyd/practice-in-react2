// import { createElement } from "react"; //React.
import { createRoot } from "react-dom/client"; //ReactDOM.

const element = (
  <>
    <h1>Our website</h1>
    <main>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        Course page
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi
        amet earum ullam, ipsa qui aut aliquam adipisci dolorum veniam
        asperiores, placeat eveniet corporis eaque exercitationem, ab voluptatum
        nisi necessitatibus?
      </p>
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        Course page
      </a>
    </main>
  </>
);

createRoot(document.getElementById("root")).render(element);

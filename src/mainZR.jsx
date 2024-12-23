import { createRoot } from "react-dom/client"; //ReactDOM.
import { Link } from "./components/Link";
import { HeadingItalic } from "./components/HeadingItalic";
import { Logger } from "./components/Logger";

const element = (
  <>
    <Logger>
      <HeadingItalic>Our amazing website</HeadingItalic>
    </Logger>
    <main>
      <Link text="Check our website now!" newTab={true} />
      <p style={{ color: "brown", fontSize: "18px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi
        amet earum ullam, ipsa qui aut aliquam adipisci dolorum veniam
        asperiores, placeat eveniet corporis eaque exercitationem, ab voluptatum
        nisi necessitatibus?
      </p>
      <Logger>
        <Link newTab={false} />
      </Logger>
    </main>
  </>
);

createRoot(document.getElementById("root")).render(element);

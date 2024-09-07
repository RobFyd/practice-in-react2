// component
const address = "https://google.com";

export function Link({ text = address, newTab }) {
  const target = newTab ? "_blank" : "";
  const rel = newTab ? "noopener noreferrer" : "";
  return (
    <a href={address} target={target} rel={rel}>
      {text}
    </a>
  );
}

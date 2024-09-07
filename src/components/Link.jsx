// component
export function Link(props) {
    const address = "https://google.com";
    const target = props.newTab ? "_blank" : "";
    const rel = props.newTab ? "noopener noreferrer" : "";
    return (
      <a href={address} target={target} rel={rel}> 
        {props.text}
      </a>
    );
  }
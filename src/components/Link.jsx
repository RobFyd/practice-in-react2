// component
export function Link(props) {
    const address = "https://google.com";
    return (
      <a href={address} target="_blank" rel="noopener noreferrer"> 
        {props.text}
      </a>
    );
  }
// component
export function Link() {
    const address = "https://google.com";
    return (
      <a href={address} target="_blank" rel="noopener noreferrer"> 
        {address}
      </a>
    );
  }
import { PersonInfo } from "./components/Personinfo";

function App() {
  const john = {
    name: "John",
    lastName: "Rambo",
    mail: "j.rambo@gmail.com",
    tel: "+44 888 000 111",
  };
  const milla = {
    name: "Milla",
    lastName: "Jovovich",
    mail: "m.jovovich@gmail.com",
    tel: "+44 999 111 222",
  };
  return <PersonInfo person={john} />;
}

export default App;

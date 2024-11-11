import { PersonInfo } from "./components/Personinfo";
// import phmImg from "./assets/phm.png";

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
  const curt = {
    name: "Curt",
    lastName: "Russell",
    mail: "c.russell@gmail.com",
  };

  function getRandomNumber() {
    return Math.round(Math.random() * 100);
  }
  const randomNumber = getRandomNumber();

  return (
    <>
      <PersonInfo person={john} />
      <hr />
      <PersonInfo person={milla} />
      <hr />
      <PersonInfo person={curt} />
      <img src="/phm.png" alt="" />
      {/* <img src={phmImg} alt="" /> */}
      <div>{randomNumber}</div>
    </>
  );
}

export default App;

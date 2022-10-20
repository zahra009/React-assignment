// import react from 'react'
import "./App.css";
import Card from "./components/Card";

const people = [
  {
    name: "Jack Bauer",
    phone: "+234 816789 098",
    email: "jack@nowhere.com",
    image: "/public/Jack_Bauer.jpg",
  },
  {
    name: "Chuck Norris",
    phone: "+234 816789 098",
    email: "gmail@chucknorris.com",
    image: "/public/chuck norris.png",
  },
];

function App() {
  return (
    <div className="App">
      <h1>React-Card Projects</h1>

      {people.map((person) => (
        <Card {...person} />
      ))}
    </div>
  );
}

export default App;

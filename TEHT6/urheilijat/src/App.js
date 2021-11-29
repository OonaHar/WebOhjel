import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Search from "./search";
import SecondComponent from "./SecondComponent";
import FirstComponent from "./FirstComponent";

function App() {
  return (
    <Router>
      <button>Krista Pärmäkoski</button>
      <button>Mikael Granlund</button>
      <button> Jaska Jokunen </button>
      <h3>Muutoksia urheilijoihin</h3>
      <button>Poista urheilija</button>
      <button>Lisää urheilija</button>
      <h1> </h1>
      <Search />

      {urheilijat.map((urheilija) => (
        <li key={urheilija.id}>{urheilija.name}</li>
      ))}
      {/*switch used to render only the first
     route that matches the location rather 
     than rendering all matching routes. */}
      <Routes>
        <Route exact path="/geeks/second" component={SecondComponent}></Route>
        <Route exact path="/geeks/first" component={FirstComponent}></Route>
        <ul>
          <br />
          <li>
            {/* Link component uses the to prop 
          to describe the location where the 
          links should navigate to. */}
            <Link to="/geeks/first" target="_blank">
              Open First Component
            </Link>
          </li>
          <br />
          <li>
            <Link to="/geeks/second" target="_blank">
              Open Second Component
            </Link>
          </li>
        </ul>
      </Routes>
    </Router>
  );
}

const urheilijat = [
  { id: "1", name: "Kimi Räikkönen" },
  { id: "2", name: "Krista Pärmäkoski" },
  { id: "3", name: "Mikael Granlund" },
];

export default App;

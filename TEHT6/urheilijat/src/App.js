import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Search from "./search";
import SecondComponent from "./SecondComponent";
import FirstComponent from "./FirstComponent";

function App() {
  return (
    <div>
      <h1>Urheilijat</h1>
      <h3>Klikkaa urheilijaa nähdäksesi tiedot</h3>
      <button>Kimi Räikkönen</button>
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
    </div>
  );
}

const urheilijat = [
  { id: "1", name: "Kimi Räikkönen" },
  { id: "2", name: "Krista Pärmäkoski" },
  { id: "3", name: "Mikael Granlund" },
];

export default App;

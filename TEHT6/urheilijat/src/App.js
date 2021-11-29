import Search from "./search";

function App() {
  return (
    <html>
      <div>
        <h1>Urheilijat</h1>
        <h3>Klikkaa urheilijaa nähdäksesi tiedot</h3>
        <button onClick="New Tab()">Kimi Räikkönen</button>

        <script>
          function NewTab(){" "}
          {window.open("https://www.geeksforgeeks.org", "_blank")}
        </script>

        <button>Krista Pärmäkoski</button>
        <button>Mikael Granlund</button>
        <button> Jaska Jokunen </button>

        <h3>Muutoksia urheilijoihin</h3>
        <button>Poista urheilija</button>
        <button>Lisää urheilija</button>

        <h1> </h1>
        <Search />
        <ul>
          {urheilijat.map((urheilija) => (
            <li key={urheilija.id}>{urheilija.name}</li>
          ))}
        </ul>
      </div>
    </html>
  );
}

const urheilijat = [
  { id: "1", name: "Kimi Räikkönen" },
  { id: "2", name: "Krista Pärmäkoski" },
  { id: "3", name: "Mikael Granlund" },
];

export default App;

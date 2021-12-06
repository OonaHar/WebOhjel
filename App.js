import "./App.css";
import Puhelintieto from "./components/Puhelintieto";
import Ylatunniste from "./components/Ylatunniste";

function App() {
  return (
    <div className="App">
      <Ylatunniste />
      <Puhelintieto nimi="Aku Ankka" puhelin="044-2132323" />
      <Puhelintieto nimi="Musta Naamio" puhelin="050-3243433" />
    </div>
  );
}

export default App;

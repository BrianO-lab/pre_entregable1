import NavBar from "./components/NavBar/NavBar";
import SaerchBar from "./components/SaerchBar/SaerchBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <SaerchBar />
        <NavBar />
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;

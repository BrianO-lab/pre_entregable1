import NavBar from './components/NavBar/NavBar';
import SaerchBar from './components/SaerchBar/SaerchBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SaerchBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/libro/" element></Route>
        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;

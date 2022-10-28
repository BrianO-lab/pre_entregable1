import NavBar from './components/NavBar/NavBar';
import SaerchBar from './components/SaerchBar/SaerchBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import './App.css';

function App() {
  return (
    <div className="app">
      <CartContextProvider>
        <BrowserRouter>
          <SaerchBar />
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaID" element={<ItemListContainer />}></Route>
            <Route
              path="/item/:itemID"
              element={<ItemDetailContainer />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;

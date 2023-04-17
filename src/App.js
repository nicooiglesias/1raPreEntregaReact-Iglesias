import './App.css';
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="s">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element= {<ItemListContainer />} />
          <Route path='/categoria/:categoryId' element= {<ItemListContainer />} />
          <Route path='/item/:itemId' element= { <ItemDetailContainer /> } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
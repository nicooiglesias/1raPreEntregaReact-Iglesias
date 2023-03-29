import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/Navbar';
import Productos from './components/Productos/Productos';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a rage'}/>
      <Productos />

    </div>
  );
}

export default App;

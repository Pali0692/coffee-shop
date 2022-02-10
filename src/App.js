import './App.css';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo="Catalogo" />
      <ItemCount />
    </div>

  );
}

export default App;

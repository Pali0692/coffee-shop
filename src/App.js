import './App.css';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo="Catalogo" />
      <ItemCount stock={5} initial={1} addon={0}/>
    </div>

  );
}

export default App;

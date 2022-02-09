import './App.css';
import ItemCount from './Components/ItemCount';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      <ItemCount/>
    </div>

  );
}

export default App;

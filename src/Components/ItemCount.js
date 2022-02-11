import { useState} from 'react';

const ItemCount = (parametros) =>{

    //let cantidad = 0;
    const [cantidad, setCantidad] = useState(parametros.initial);

    const increment = () => {        
        if (cantidad < parametros.stock){

            setCantidad(cantidad+1) ;  
            
        }    
    }
    
    const decrease = () => {
        if (cantidad > parametros.initial){
            setCantidad(cantidad-1) ;
        }
    }

    const addItem = () => {
        alert(`agregaste la cantidad de: ${cantidad}`);

        
    }

    return (
        <>
            <div>
            <button type="button" class="btn btn-outline-secondary" onClick={decrease}>-</button>
            <button type="button" class="btn btn-outline-secondary" onClick={increment}>+</button>
            <p>{cantidad}</p>
            <button type="button" class="btn btn-outline-secondary" Onclick={addItem}>Agregar al carrito</button>
            </div>
        </>

    );
}

export default ItemCount;
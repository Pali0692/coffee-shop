
import { useState } from 'react';

const ItemCount = () => {
    const [cantidad, setCantidad] = useState (1);

    const increment = () => {
        if (cantidad < 5) {
            setCantidad(cantidad+1);
        }
    }

    const decrease = () => {
        if (cantidad > 1) {
            setCantidad(cantidad-1);
        }
    }

    return (
        <>
            <div>
            <button type="button" class="btn btn-outline-secondary" onClick={decrease}>-</button>
            <button type="button" class="btn btn-outline-secondary" onClick={increment}>+</button>
            <p>{cantidad}</p>
            <button type="button" class="btn btn-outline-secondary">Agregar al carrito</button>
            </div>
        </>

    );
}

export default ItemCount;
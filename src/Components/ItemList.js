import React from "react";


const ItemList = (items) =>{
        return (
                <>
                <div className="CuadroProducto" >
                    <div>
                        <p>{items.title}</p>
                        <img src={items.pictureURL} alt={items.title} /> 
                        <p>ID: {items.id}</p>                       
                        <p>Descripción: {items.description}</p>             
                        <p>Precio: ${items.price}</p>
                        <button type="button" class="btn btn-outline-secondary">Más detalles</button>  
                    </div>
                </div>
                </>
        );
}

export default ItemList

import ItemList from "./ItemList";

const ItemListContainer = () =>{
    const productos = [
        {
            id:10,
            title: "café 1",
            price: 20,
            pictureUrl: "http://www.welchez.cafe/wp-content/uploads/2014/01/granos-cafe.jpg"
        },
        {
            id:20,
            title: "café 2",
            price: 22,
            pictureUrl: "http://www.welchez.cafe/wp-content/uploads/2014/01/granos-cafe.jpg"
        },
        {
            id:30,
            title: "café 3",
            price: 23,
            pictureUrl: "http://www.welchez.cafe/wp-content/uploads/2014/01/granos-cafe.jpg"
        }
    ]
    
    const promesa = (time, data) => {
        return new Promise((resolve, reject) => {
            if (productos.length > 1 ) {
                setTimeout(() => {resolve(data)}, time);
            } else {
                reject("Error")
            }
        });
    }

    promesa(2000, productos.map(ItemList))
    .then(data => {console.log(data)})
    .catch(error => console.log(error))

    return (
        <>            
            <div className="ItemListContainer">
                {  
                    productos.map(ItemList)
                }
                    <ItemList items={productos} />                                           
            </div>
        </>
    );
}

export default ItemListContainer;
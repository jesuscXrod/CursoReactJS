import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

const sumar = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

const restar = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

return(
    <div>
        <button onClick={sumar}> + </button>
        <h2>Cantidad: {quantity}</h2>
        <button onClick={restar}> - </button>
    
        <div>
            <button onClick={() => onAdd(quantity)} disable={!stock}>Agregar a carrito</button>
        </div>

        <div>
            <button onClick={() => setQuantity(0)}>Reset</button>
        </div>
    
    </div>
) 
}

export default ItemCount
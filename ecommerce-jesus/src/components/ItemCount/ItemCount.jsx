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
    <div className='container-counter'>
        <h2 className='center-align'>Cantidad: {quantity}</h2>
        <div>
            <button className='waves-effect waves-light btn-small' onClick={restar}> - </button>
            <button className='waves-effect waves-light btn-small' onClick={sumar}> + </button>     
            <div>
                <button className='waves-effect waves-light btn-small' onClick={() => onAdd(quantity)} disable={!stock}>Agregar a carrito</button>
            </div>
            <div>
                <button className='waves-effect waves-light btn-small' onClick={() => setQuantity(0)}>Reset</button>
            </div>
        </div>
    </div>
    ) 
}

export default ItemCount
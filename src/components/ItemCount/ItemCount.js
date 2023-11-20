import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className="Button button is-primary is-small rounded" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button button is-primary is-small rounded" onClick={increment}>+</button>
            </div>
            <div className='ButtonsContainer'>
                <button className="Button button is-primary is-medium rounded" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>

    )
}







export default ItemCount; 
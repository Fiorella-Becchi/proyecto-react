import { CartContext } from "../../Context/CartContext";
import React from "react";
import { useContext } from "react";
import "./CartItem.css";





const CartItem = ({item}) => {
    const { removeItem } = useContext(CartContext);
    return (
        <div>
            <picture>
                <img src={item.img} alt={item.name} />
            </picture>
            <div>
                <h2>{item.name}</h2>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: {item.quantity * item.price}</p>
                <button onClick={()=> removeItem(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}





export default CartItem
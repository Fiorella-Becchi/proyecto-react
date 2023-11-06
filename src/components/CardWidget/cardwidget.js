//import cart from "./assets/cart.png";
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div className= "content has-text-centered">
<FaShoppingCart />
<span className= "numeroCarrito">1</span>
        </div>
    )
}

export default CartWidget 
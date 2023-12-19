import cart from "./assets/cart.png";
import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
   const { totalQuantity } = useContext(CartContext)

   return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
        <div className="CartContainer">
        <img className='CartImg' src={cart} alt='cart-widget'/>
        { totalQuantity }
        </div>
    </Link>
   )
}

export default CartWidget
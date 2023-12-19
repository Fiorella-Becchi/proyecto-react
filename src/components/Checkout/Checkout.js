import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { getDoc, doc, Timestamp, writeBatch } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useContext, useState } from "react";

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)
    const createOrder = async ( { name, phone, email }) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                item: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
        }

    }

    if (loading) {
        return
    }
}



















export default Checkout;
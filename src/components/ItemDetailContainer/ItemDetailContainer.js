import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'items', itemId)
        getDoc(docRef)
        .then((response) => {
            const data = response.data()
            const productsAdapted = { id: response.id,  nombre: data.name, precio: data.price, cantidad: data.stock }
            setProduct(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])
    return (
        <div>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                product && <ItemDetail product={product} />
            )}
        </div>
    );
};




export default ItemDetailContainer;

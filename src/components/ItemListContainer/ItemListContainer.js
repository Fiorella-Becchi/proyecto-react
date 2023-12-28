import React, { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useParams } from 'react-router-dom';
import ProfileCard from '../ProfileCard';
import { Link } from 'react-router-dom';
import Auth from "../Auth";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const fetchProducts = async () => {
            try {
                let collectionRef;

                if (categoryId) {
                    
                    collectionRef = query(collection(db, 'items'), where('categoryId', '==', categoryId));
                } else {
                    
                    collectionRef = collection(db, 'items');
                }

                const response = await getDocs(collectionRef);

                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, nombre: data.nombre, precio: data.precio, cantidad: data.stock, img: data.img };
                });
                console.log("Products Adapted:", productsAdapted)
                setProducts(productsAdapted);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <div className="container">
            <h1 className="has-text-centered">{greeting}</h1>
            <div className="columns is-multiline is-flex is-justify-content-center">
                {products.map((product) => (
                    <div className="column is-6-tablet is-4-desktop is-3-widescreen" key={product.id}>
                        <ProfileCard titulo={product.nombre} descripcion={product.descripcion} img={product.img} />
                        <button className="button is-primary is-small rounded is-right">
                            <Link to={`/item/${product.id}`}>Ver Info</Link>
                        </button>
                    </div>
                ))}
            </div>
            <Auth />
        </div>
    );
};

export default ItemListContainer;

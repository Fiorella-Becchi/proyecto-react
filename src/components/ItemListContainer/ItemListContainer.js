import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import ProfileCard from '../ProfileCard'
import { Link } from 'react-router-dom'
import FranImg from '../../img/francia.jpg';
import BelgImg from '../../img/belgica.jpg';
import PortImg from '../../img/portugal.jpg';
import ItemDetail from '../ItemDetail/ItemDetail'



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? () => getProductsByCategory(categoryId) : getProducts
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
    return (
        <div className="container">
            <h1 className="has-text-centered"> {greeting} </h1>
            <div className="columns is-multiline is-flex is-justify-content-center">
                {products.map((product) => (
                    <div className="column is-6-tablet is-4-desktop is-3-widescreen" key={product.id}>
                        <ProfileCard titulo={product.name} descripcion={product.description} img={product.img} />
                        <button className="button is-primary is-small rounded is-right">
                            <Link to={`item/${product.id}`}>Ver Info</Link>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemListContainer 
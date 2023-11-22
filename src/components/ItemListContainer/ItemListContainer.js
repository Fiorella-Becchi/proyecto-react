import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import ProfileCard from '../ProfileCard'
import { Link } from 'react-router-dom'
import FranImg from '../../img/francia.jpg';
import BelgImg from '../../img/belgica.jpg';
import PortImg from '../../img/portugal.jpg';



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
    return (
        <div>
            <h1 className="has-text-centered"> {greeting} </h1>
            {products.map((product) => {
                return (
                    <div className="container">
                        <div className="columns">
                            <div className="column is-4">
                                <ProfileCard titulo="Portugal" descripcion="Una semana en las calles portuguesas." img={PortImg} />
                                <button className="button is-primary is-small rounded is-right"> Ver Info</button>
                            </div>
                            <div className="column is-4">
                                <ProfileCard titulo="Bélgica" descripcion="Ruta de las cervezas belgas." img={BelgImg} />
                                <button className="button is-primary is-small rounded is-right"> Ver Info</button>
                            </div>
                            <div className="column is-4">
                                <ProfileCard titulo="Francia" descripcion="15 días en la ciudad del amor." img={FranImg} />
                                <button className="button is-primary is-small rounded is-right"> Ver Info</button>
                            </div>
                        </div>
                        <Link to='item/{product.id}'>Ver Info</Link>
                    </div>
    )
})}
        </div >
    )
}

export default ItemListContainer 
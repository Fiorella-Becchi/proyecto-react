import './ItemList.css'
import Item from '../Item/Item.js'
import products from '../../asyncMock.js'

const ItemList = ({ products }) => {
    return (
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList
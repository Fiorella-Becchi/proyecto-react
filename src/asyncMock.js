import FranImg from "./img/francia.jpg";
import BelgImg from "./img/belgica.jpg";
import PortImg from "./img/portugal.jpg";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


const products = [
    {
        id: '1',
        name: 'Portugal',
        price: 500,
        category: 'Viaje estudiantil',
        img: PortImg,
        stock: '30',
        description: 'Informacion del viaje'

    },
    {
        id: '2',
        name: 'Belgica',
        price: 300,
        category: 'Viaje turístico',
        img: BelgImg,
        stock: '25',
        description: 'Informacion del viaje'
    },
    {
        id: '3',
        name: 'Francia',
        price: 250,
        category: 'Viaje de parejas',
        img: FranImg,
        stock: '10',
        description: 'Informacion del viaje'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}


export const getProductsByCategory = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
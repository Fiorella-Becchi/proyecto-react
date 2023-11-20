const products = [
    {
        id: '1',
        name: 'Portugal',
        price: 500,
        category: 'viaje turistico',
        img: '',
        stock:'30',
        description:'Informacion del viaje'

    },
    {
        id: '2',
        name: 'Belgica',
        price: 300,
        category: 'viaje turistico',
        img: '',
        stock:'25',
        description:'Informacion del viaje' 
    },
    {
        id: '3',
        name: 'Francia',
        price: 250,
        category: 'viaje turistico',
        img: '',
        stock:'10',
        description:'Informacion del viaje' 
    }
]

export const getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

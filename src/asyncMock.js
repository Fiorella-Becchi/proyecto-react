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
        description: '¡Descubre la riqueza cultural y la historia fascinante de Portugal en nuestro emocionante viaje estudiantil de 10 días! Sumérgete en la magia de Lisboa y Oporto, explorando antiguas calles empedradas y monumentos históricos. Desde la majestuosidad de la Torre de Belém hasta la vibrante vida nocturna en el Barrio Alto, cada día está lleno de aventuras emocionantes. Disfruta de la deliciosa gastronomía portuguesa, con sabores que van desde los famosos pasteles de nata hasta los exquisitos platos de bacalao. Con visitas a emblemáticos sitios como Sintra y Fátima, este viaje ofrece una experiencia educativa única que combina diversión y aprendizaje, creando recuerdos inolvidables para toda la vida. ¡Embárcate en este viaje enriquecedor que ampliará tus horizontes y fortalecerá los lazos entre compañeros de clase!'

    },
    {
        id: '2',
        name: 'Belgica',
        price: 300,
        category: 'Viaje turístico',
        img: BelgImg,
        stock: '25',
        description: 'Explora la fascinante tierra de chocolates, cervezas y arquitectura medieval con nuestra oferta de viaje turístico de 15 días a Bélgica. Desde las adoquinadas calles de Brujas hasta los imponentes edificios de la Grand Place en Bruselas, este itinerario te sumergirá en la rica historia y encanto de este país. Disfruta de catas de chocolate belga, explora antiguos castillos y descubre la magia de los mercados navideños en invierno. Visita la famosa estatua del Manneken Pis, maravíllate con la arquitectura art nouveau y prueba una variedad de cervezas belgas en auténticos cafés. Con excursiones a Gante, Amberes y más, este viaje te llevará a través de un recorrido completo por los tesoros culturales y culinarios de Bélgica. ¡Deja que cada día te sorprenda con nuevas maravillas en este destino turístico único!'
    },
    {
        id: '3',
        name: 'Francia',
        price: 250,
        category: 'Viaje de parejas',
        img: FranImg,
        stock: '10',
        description:
            'Sumérgete en una experiencia romántica sin igual con nuestra oferta de pareja de 20 días a Francia. Desde las encantadoras calles empedradas de París hasta los viñedos idílicos de la región de Borgoña, este viaje está diseñado para crear momentos inolvidables. Disfruta de cenas íntimas con vista a la Torre Eiffel, pasea por los jardines de Versalles de la mano de tu ser querido y déjate seducir por la magia de la Riviera Francesa. Descubre la rica historia, la exquisita gastronomía y el arte que impregnan cada rincón del país. Desde la majestuosidad de los castillos del Valle del Loira hasta los encantadores paisajes de la Provenza, este viaje te brinda la oportunidad de fortalecer los lazos amorosos mientras exploras la belleza incomparable de Francia. ¡Vive la experiencia de un viaje que creará recuerdos románticos duraderos!'

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

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    });
};





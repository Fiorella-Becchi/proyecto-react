import './Item.css'
import { Link }from "react-router-dom";
import FranImg from "../../img/francia.jpg";
import BelgImg from "../../img/belgica.jpg";
import PortImg from "../../img/portugal.jpg";
import '../../asyncMock';



const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">

                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={'/item/${id}'} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}




export default Item
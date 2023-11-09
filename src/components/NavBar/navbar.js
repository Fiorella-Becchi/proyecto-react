import CartWidget from "../CardWidget/cardwidget";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a href="index.html" className="navbar-brand">Inicio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-space-around" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item"> Quiénes Somos</li>
                        <li className="nav-item">Nuestros Viajes</li>
                        <li className="nav-item"> Sugerencias Viajeras</li>
                        <li className="nav-item">Contacto</li>
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
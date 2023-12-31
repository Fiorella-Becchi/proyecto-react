import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="container">
                <div className="Categories column is-mobile ">
                    < div className="columns is-multiline is-centered is-spaced">
                        <div className="column is-12-mobile is-6-tablet">
                            <NavLink to={'/category/viajeturistico'} className={({ isActive }) => isActive ? 'ActiveOption' : "Option"}>Viaje Turístico</NavLink>
                        </div>
                        <div className="column is-12-mobile is-6-tablet">
                            <NavLink to={'/category/viajeestudiantil'} className={({ isActive }) => isActive ? 'ActiveOption' : "Option"}>Viaje Estudiantil</NavLink>
                        </div>
                        <div className="column is-12-mobile is-6-tablet">
                            <NavLink to={'/category/viajedeparejas'} className={({ isActive }) => isActive ? 'ActiveOption' : "Option"}>Viaje de Parejas</NavLink>
                        </div>
                        <div className="column is-12-mobile is-6-tablet">
                            <NavLink to={'/cart'} className={({ isActive }) => isActive ? 'ActiveOption' : "Option"}>Carrito</NavLink>
                        </div>
                        <div className="column is-12-mobile is-6-tablet">
                            <NavLink to={'/checkout'} className={({ isActive }) => isActive ? 'ActiveOption' : "Option"}>Orden</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar
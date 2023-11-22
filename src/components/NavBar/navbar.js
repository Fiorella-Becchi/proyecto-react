import CardWidget from "../CardWidget/cardwidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link } from 'react-router-dom'

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
                {/*
                <div className="collapse navbar-collapse justify-content-space-around" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item"> Quiénes Somos</li>
                        <li className="nav-item">Nuestros Viajes</li>
                        <li className="nav-item"> Sugerencias Viajeras</li>
                        <li className="nav-item">Contacto</li>
                    </ul>
                </div>
    */ }
            </div>
            <div className="container">
                <div className="columns">
                    <div className="Categories column is-2 ">
                        <Link to='/'>
                            <h3>Inicio</h3>
                        </Link>

                        <NavLink to={'/category/viajeturistico'} className={({ isActive }) => isActive ? 'ActiveOption' : "Option"}>Viaje Turístico</NavLink>
                        <NavLink to={'/category/viajeestudiantil'} className={({ isActive }) => isActive ? 'ActiveOption' : "Option"}>Viaje Estudiantil</NavLink>
                        <NavLink to={'/category/viajedeparejas'} className={({ isActive }) => isActive ? 'ActiveOption' : "Option"}>Viaje de Parejas</NavLink>
                    </div>
                </div>
            </div>
            <CardWidget />
            <Link to="/">Inicio</Link>
        </nav>
    )
}

export default NavBar
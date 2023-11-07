import ProfileCard from "./components/ProfileCard";

import FranImg from "./img/francia.jpg";
import BelgImg from "./img/belgica.jpg";
import PortImg from "./img/portugal.jpg";

import NavBar from "./components/NavBar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";

function App() {
    return (
        <div className="App">
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">Vida Nómade</h1>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                        <NavBar />
                    </div>
                    <div className="column is-4">
                        <ItemListContainer greeting={"Bienvenidos a Vida Nómade"} />
                    </div>
                    <section className="hero">
                        <div className="column is-4">
                            <h1> Opciones de Viajes Disponibles </h1>
                        </div>
                    </section>
                </div>
            </div>

        <div className="container">
            <div className="columns">
                <div className="column is-4">
                    <ProfileCard titulo="Portugal" descripcion="Una semana en las calles portuguesas." img={PortImg} />
                    <button> Reservar</button>
                </div>
                <div className="column is-4">
                    <ProfileCard titulo="Bélgica" descripcion="Ruta de las cervezas belgas." img={BelgImg} />
                    <button> Reservar</button>
                </div>
                <div className="column is-4">
                    <ProfileCard titulo="Francia" descripcion="15 días en la ciudad del amor." img={FranImg} />
                    <button> Reservar</button>
                </div>
            </div>
        </div>

    
    <footer className="footer">
        <div className="content has-text-centered">
            <p>
                © 2023 Vida Nómade. Todos los derechos reservados.
            </p>
        </div>
    </footer>
        </div >
    );
}


export default App;

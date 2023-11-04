import ProfileCard from "./components/ProfileCard";

import FranImg from "./img/francia.jpg";
import BelgImg from "./img/belgica.jpg";
import PortImg from "./img/portugal.jpg";

import NavBar from "./components/NavBar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";


function App() {
    return (
        <div className= "App"> 
            <NavBar/>
            <ItemListContainer greeting={"Bienvenidos a Vida Nómade"}/>
            <section className="hero">
                <div className="hero-body">
                    <h1> Opciones de Viajes Disponibles </h1>
                </div>
            </section>
            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard titulo="Portugal" descripcion="Una semana en las calles portuguesas." img={PortImg} />
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Francia" descripcion="15 dias en la ciudad del amor." img={FranImg} />
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Bélgica" descripcion="Ruta de las cervezas belgas." img={BelgImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;

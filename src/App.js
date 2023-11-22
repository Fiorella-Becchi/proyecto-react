import ProfileCard from "./components/ProfileCard";
import FranImg from "./img/francia.jpg";
import BelgImg from "./img/belgica.jpg";
import PortImg from "./img/portugal.jpg";
import NavBar from "./components/NavBar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCount from "./components/ItemCount/ItemCount";
import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



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
                    <div className="column is-4 ">
                        <BrowserRouter>
                            <NavBar />
                            <Routes>
                                <Route path='/' element={<ItemListContainer />} />
                                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                            </Routes>
                        </BrowserRouter>
                    </div>
                    <div className="column is-4">
                        <ItemListContainer greeting={"Bienvenidos a Vida Nómade"} />
                    </div>
                    <section className="hero">
                        <div className="column is-4">
                            <h1 className="has-text-center"> Viajes Disponibles </h1>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard titulo="Portugal" descripcion="Una semana en las calles portuguesas." img={PortImg} />
                        <button className="button is-primary is-small rounded is-right"> Ver Info</button>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Bélgica" descripcion="Ruta de las cervezas belgas." img={BelgImg} />
                        <button className="button is-primary is-small rounded is-right"> Ver Info</button>
                    </div>
                    <div className="column is-4">
                        <ProfileCard titulo="Francia" descripcion="15 días en la ciudad del amor." img={FranImg} />
                        <button className="button is-primary is-small rounded is-right"> Ver Info</button>
                    </div>
                </div>
                <div className="container">
                    <ItemDetailContainer />

                    <div className="has text-centered column is-2" style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }} >
                        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
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

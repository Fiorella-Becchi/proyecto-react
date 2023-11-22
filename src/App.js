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
                </div>
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p>
                            © 2023 Vida Nómade. Todos los derechos reservados.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}



export default App;





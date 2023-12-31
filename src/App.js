//Componentes
import ProfileCard from "./components/ProfileCard";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemCount from "./components/ItemCount/ItemCount";
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
//Imagenes
import FranImg from "./img/francia.jpg";
import BelgImg from "./img/belgica.jpg";
import PortImg from "./img/portugal.jpg";
//Librerias
import "bulma/css/bulma.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CartContext, CartProvider } from "./Context/CartContext";
import { useEffect, useState } from "react";




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
                    <div className="column is-12 ">
                        <CartProvider>
                            <BrowserRouter>
                                <NavBar />
                                <Routes>
                                    <Route path='/' element={<ItemListContainer />} />
                                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                                    <Route path='/cart' element={<Cart />} />
                                    <Route path='/checkout' element={<Checkout />} />
                                    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                                </Routes>
                            </BrowserRouter>
                        </CartProvider>
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
        </div>

    );
}



export default App;
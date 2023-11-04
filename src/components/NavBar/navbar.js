import CartWidget from "../CardWidget/cardwidget"

const NavBar = () => {
    return(
        <nav> 
        <h2>Vida Nomade | Oferta de Viajes</h2>
        <div>
        <button> Portugal </button>
        <button> Belgica </button>
        <button> Francia </button>
        </div>
        <CartWidget />
        </nav >
    )
}

export default NavBar
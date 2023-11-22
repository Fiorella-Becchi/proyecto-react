import { useState } from "react";

function ProfileCard(props) {

    const [count, setCount] = useState(0);


    let { titulo, descripcion, img } = props;

    function handleClickSuma() {
        console.log("Click en el boton");
        setCount(count + 1)
    }
    function handleClickResta() {
        if (count > 0)
            setCount(count - 1)
    }


    return (
        <div className="card">
            <div className="card-img">
                <figure className="image is-1">
                    <img src={img} alt="fotos paises" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-4">{props.titulo}</h3>
                    <p className="subtitle is-6">{props.descripcion}</p>
                </div>
                <div className="columns">
                    <div className="column is-4">
                        <span>Likes {count} </span>
                    </div>
                    <div className="column is-5">
                        <button onClick={handleClickSuma} className="button is-primary is-small rounded is-right">+</button>
                    </div>
                    <div className="column is-5">
                        <button onClick={handleClickResta} className="button is-primary is-small rounded is-right">-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
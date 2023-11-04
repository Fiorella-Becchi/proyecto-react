

function ProfileCard(props){

    let {titulo, descripcion, img} = props;
    return (
        <div>
            <img src={img} alt="fotos paises"/>
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
        </div>  
    )
}

export default ProfileCard;
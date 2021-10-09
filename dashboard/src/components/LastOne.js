import '../css/LastOne.css';
//This functional component is for the last product and user.

export default function LastOne(props){
    let lastOneOf ;
    if(props.lastOneOf === 'user'){
        lastOneOf = 'Último usuario registrado:';
    } else if(props.lastOneOf === 'product'){
        lastOneOf = 'Último producto registrado:';
    }
    return(
        <article id="LastOne">
            <img src={(props.image)?props.image:"/assets/profilePicture.jpg"} alt="Imagen del último." id="imageLastOne"></img>
            <div id="title-info">
            <h2 id="lastOneOf">{lastOneOf + ' ' + props.dato}</h2>
            <p id="infoLastOne">
                {props.info}
            </p>
            </div>
        </article>
    );
}
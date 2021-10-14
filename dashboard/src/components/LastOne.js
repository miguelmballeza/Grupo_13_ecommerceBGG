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
            <h2 id="lastOneOf">{lastOneOf + ' ' } <a href={props.detail} target="_blank" rel="noopener noreferrer">{ props.dato}</a></h2>
            <p id="infoLastOne">
                {props.infoFirst} {props.info}
                <br>
                </br>
                {props.infoLast} {props.infoArtist}
                <br>
                </br>
                {props.infoCountry} {props.infoSex}
                <br>
                </br>
                {props.infoBirthday} {props.infoPrice}
                <br>
                </br>
                {props.infoEmail}
            </p>
            </div>
        </article>
    );
}
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
                <div id="particular-information">
                    <p>{props.firstField}</p>
                {props.infoFirst} {props.info}
                </div>
                <div id="particular-information">
                    <p>{props.secondField}</p>
                {props.infoLast} {props.infoArtist}
                </div>
                <div id="particular-information">
                    <p>{props.thirdField}</p>
                {props.infoCountry} {props.infoSex}
                </div>
                <div id="particular-information">
                    <p>{props.fourthField}</p>
                {props.infoBirthday} {props.infoPrice}
                </div>
                <div id="particular-information">
                    <p>{props.fifthField}</p>
                {props.infoEmail} {props.infoPieces}
                </div>
            </p>
            </div>
        </article>
    );
}
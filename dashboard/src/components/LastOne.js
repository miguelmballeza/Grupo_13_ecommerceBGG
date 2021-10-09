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
            <img src="/assets/profilePicture.jpg" alt="Imagen del último." id="imageLastOne"></img>
            <div id="title-info">
            <h2 id="lastOneOf">{lastOneOf}</h2>
            <p id="infoLastOne">
                lorem lorem lore mlor emlor emlo re ml oreml orem lo rem lore mlorem lorem lorem lore mlor emlor emlo re ml oreml orem lo rem lore mlorem
            </p>
            </div>
        </article>
    );
}
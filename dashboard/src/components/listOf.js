import '../css/listOf.css';


export default function listOf(props) {
    let data;
    if(props.list === 'users'){
        data = 'usuarios';
    }else if(props.list === 'products') {
        data = 'productos';
    }
    return(
        <article id="listOf-something">
            <h2 id="list">Lista de {data} en la Base de Datos:</h2>
            <ol id="ordered-list">
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>
                <li id="ordered-item"></li>

            </ol>
        </article>
    );
}
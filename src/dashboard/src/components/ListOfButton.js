import '../css/ListOfButton.css';
//This functional component is for the list of users and products.

export default function ListOf(props){
    let data;
    if(props.listOf === 'users'){
        data = 'usuarios'
    } else if(props.listOf === 'products'){
        data = 'productos'
    }
    return(
        <article id="listOf">
            <form action="/listOf" method="GET">
                <button type="submit" id="submit-button">Lista de {data}</button>
            </form>
        </article>
    );
}
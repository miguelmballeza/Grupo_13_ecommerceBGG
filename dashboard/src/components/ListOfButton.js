import '../css/ListOfButton.css';
//This functional component is for the list of users and products.

export default function ListOf(props){
    let data, url;
    if(props.listOf === 'Users'){
        data = 'usuarios'
        url = '/listOfUsers';
    } else if(props.listOf === 'Products'){
        data = 'productos'
        url = '/listOfProducts';
    }
    return(
        <article id="listOf">
            <form action={url} method="GET">
                <button type="submit" id="submit-button">Lista de {data}</button>
            </form>
        </article>
    );
}
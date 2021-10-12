import '../css/listOf.css';
import  {useState, useEffect} from 'react';

export default function ListOf(props) {
    let data;
    const [productList, setProductList] = useState([])
    const [userList, setUserList] = useState([])
    if(props.list === 'users'){
        data = 'usuarios';
    }else if(props.list === 'products') {
        data = 'productos';
    }
    useEffect(() => {
        fetch('http://localhost:1080/api/products',{mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            setProductList(data.products)
        })
            
    },[])

    useEffect(() => {
        fetch('http://localhost:1080/api/users',{mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            setUserList(data.users)
        })
            
    },[])

  
    // console.log(userList.map(names => `${names.firstName} ${names.lastName}`))
    // console.log(productList.map(name => name.name))

    return(
        <article id="listOf-something">
            <h2 id="list">Lista de {data} en la Base de Datos:</h2>
            <ol id="ordered-list">
                {
                    (data === 'productos') ? (
                    productList.map(name => (
                        <li id="ordered-item">{name.name}</li>
                    ))) : (
                        userList.map(name => (
                            <li id="ordered-item">{`${name.firstName} ${name.lastName}`}</li> 
                        ))
                    )
                }
                {/* <li id="ordered-item"></li>
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
                <li id="ordered-item"></li> */}

            </ol>
        </article>
    );
}
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
        fetch('https://ecommercebmg.herokuapp.com/api/products',{mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            setProductList(data.products)
        })
            
    },[])

    useEffect(() => {
        fetch('https://ecommercebmg.herokuapp.com/api/users',{mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            setUserList(data.users)
        })
            
    },[])

  
    // console.log(userList.map(names => `${names.firstName} ${names.lastName}`))
    // console.log(productList.map((name,i) => (name.name)+' '+ i ))

    return(
        <article id="listOf-something">
            <h2 id="list">Lista de {data} en la Base de Datos:</h2>
            <ol id="ordered-list">
                {
                    (data === 'productos') ? (
                    productList.map((name, i) => (
                        <li id="ordered-item" key={i}><a href={`https://ecommercebmg.herokuapp.com${name.detail}`} target="_blank" rel="noopener noreferrer" >{name.name}</a></li>
                    ))) : (
                        userList.map((name, i) => (
                            <li id="ordered-item" key={i}><a href={`https://ecommercebmg.herokuapp.com${name.detail}`} target="_blank" rel="noopener noreferrer">{`${name.firstName} ${name.lastName}`}</a></li> 
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
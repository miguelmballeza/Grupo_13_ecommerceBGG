import '../css/ContentWrapper.css';
import LastOne from './LastOne';
import Categories from './Categories';
import ListOfButton from './ListOfButton';
import { useState, useEffect } from 'react';

export default function ContentWrapper() {
    const [lastProduct, setLastProduct] = useState([])
    const [lastUser, setLastUser] = useState([])
    const [imageProduct, setImageProduct] = useState([])
    const [imageUser, setImageUser] = useState([])
    // const [productList, setProductoList] = useState([])
    // const [userList, setUserList] = useState([])

    // Ultimo producto
    useEffect(() => {
        fetch('http://localhost:1080/api/products', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setLastProduct({
                ultimoProducto: data.products[data.count - 1].name,
                description: data.products[data.count - 1].description,
                imagen:  fetch('http://localhost:1080/api/products/'+(data.count))
                .then(response => response.json())
                .then(img => {
                setImageProduct({ 
                        url: 'http://localhost:1080/'+img.imageURL
                    })
                }),
                products: data
            })
        })
    },[])

    
    // ultimo Usuario
    useEffect(() => {
        fetch('http://localhost:1080/api/users', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            setLastUser({
                firstName: data.users[data.count - 1].firstName,
                lastName: data.users[data.count - 1].lastName,
                imagen: fetch('http://localhost:1080/api/users/'+data.count)
                .then(response => response.json())
                .then(img => {
                    setImageUser({
                        url: 'http://localhost:1080/'+img.imageURL,
                        country: img.country_1,
                        
                    })
                })
            })
        })
    },[])
    return(
        <section id="ContentWrapper">
            <div id="lastOnes">
                <LastOne lastOneOf="user" dato={lastUser.firstName + ' ' + lastUser.lastName} info={ "ciudad: " + imageUser.country } image={imageUser.url}/>
                <LastOne lastOneOf="product" dato={lastProduct.ultimoProducto} info={lastProduct.description} image={imageProduct.url} />
            </div>
            <Categories />
            <div id="listsOf">
                <ListOfButton listOf="Users"   />
                <ListOfButton listOf="Products"/>
            </div>
        </section>
    );
};
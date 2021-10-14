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

    // Ultimo producto
    useEffect(() => {
        fetch('http://localhost:1080/api/products', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            setLastProduct({
                ultimoProducto: data.products[data.count - 1].name,
                description: data.products[data.count - 1].description,
                detail: "http://localhost:1080"+data.products[data.count - 1].detail,
                imagen:  fetch('http://localhost:1080/api/products/'+(data.count))
                .then(response => response.json())
                .then(img => {
                setImageProduct({ 
                        url: 'http://localhost:1080/'+img.imageURL,
                        artist:  img.artists[0].fullName,
                        sex: (img.artists[0].sex === 'F') ? 'Femenino' : 'Masculino',
                        price: img.price,
                    })
                }),
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
                detail: "http://localhost:1080"+data.users[data.count - 1].detail,
                imagen: fetch('http://localhost:1080/api/users/'+data.count)
                .then(response => response.json())
                .then(img => {
                    setImageUser({
                        url: 'http://localhost:1080/'+img.imageURL,
                        country: img.country_1,
                        birthday: img.birthday,
                        email: img.email
                        
                    })
                })
            })
        })
    },[])
    // console.log("enlace usuario: "+lastUser.detail)
    // console.log(imageProduct.sex)
    console.log(imageProduct.price)
    return(
        <section id="ContentWrapper">
            <div id="lastOnes">
                <LastOne lastOneOf="user" dato= {`${lastUser.firstName} ${lastUser.lastName}`} image={imageUser.url} detail={lastUser.detail} infoFirst={`Nombre: ${lastUser.firstName}`} infoLast={`Apellido: ${lastUser.lastName}`} infoCountry={`País: ${imageUser.country}`} infoBirthday={`Cumpleaños: ${imageUser.birthday}`} infoEmail={`Correo: ${imageUser.email}`}/>
                <LastOne lastOneOf="product" dato={lastProduct.ultimoProducto}  image={imageProduct.url} detail={lastProduct.detail} info={`Descripción: ${lastProduct.description}`} infoArtist={`Artista: ${imageProduct.artist}`} infoSex={`Sexo: ${imageProduct.sex}`} infoPrice={`Precio: $${imageProduct.price}`}/>
            </div>
            <Categories />
            <div id="listsOf">
                <ListOfButton listOf="Users"   />
                <ListOfButton listOf="Products"/>
            </div>
        </section>
    );
};
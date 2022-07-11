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
        fetch('https://ecommercebmg.herokuapp.com/api/products', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            setLastProduct({
                ultimoProducto: data.products[data.count - 1].name,
                description: data.products[data.count - 1].description,
                detail: "https://ecommercebmg.herokuapp.com"+data.products[data.count - 1].detail,
                imagen:  fetch('https://ecommercebmg.herokuapp.com/api/products/'+(data.count))
                .then(response => response.json())
                .then(img => {
                setImageProduct({ 
                        url: 'https://ecommercebmg.herokuapp.com/'+img.imageURL,
                        artist:  img.artists[0].fullName,
                        year: img.year,
                        price: img.price,
                        pieces: img.pieces
                    })
                }),
            })
        })
    },[])
    
    // ultimo Usuario
    useEffect(() => {
        fetch('https://ecommercebmg.herokuapp.com/api/users', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            setLastUser({
                firstName: data.users[data.count - 1].firstName,
                lastName: data.users[data.count - 1].lastName,
                detail: "https://ecommercebmg.herokuapp.com"+data.users[data.count - 1].detail,
                imagen: fetch('https://ecommercebmg.herokuapp.com/api/users/'+data.count)
                .then(response => response.json())
                .then(img => {
                    setImageUser({
                        url: 'https://ecommercebmg.herokuapp.com/'+img.imageURL,
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
    // console.log(imageProduct.price)
    return(
        <section id="ContentWrapper">
            <div id="lastOnes">
                <LastOne lastOneOf="user" dato= {`${lastUser.firstName} ${lastUser.lastName}`} image={imageUser.url} detail={lastUser.detail} firstField = "Nombre : " secondField = "Apellido : " thirdField = "País : " fourthField = "Nacimiento : " fifthField = "Email : " infoFirst={`${lastUser.firstName}`} infoLast={`${lastUser.lastName}`} infoCountry={`${imageUser.country}`} infoBirthday={`${imageUser.birthday}`} infoEmail={`${imageUser.email}`}/>
                <LastOne lastOneOf="product" dato={lastProduct.ultimoProducto}  image={imageProduct.url} detail={lastProduct.detail} firstField = "Descripción : " secondField = "Artista : " thirdField = "Año : " fourthField = "Precio : " info={`${lastProduct.description}`} infoArtist={`${imageProduct.artist}`} infoSex={`${imageProduct.year}`} infoPrice={`${imageProduct.price}`} />
            </div>
            <Categories />
            <div id="listsOf">
                <ListOfButton listOf="Users"   />
                <ListOfButton listOf="Products"/>
            </div>
        </section>
    );
};
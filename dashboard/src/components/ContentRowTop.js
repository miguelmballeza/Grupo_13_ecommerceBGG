import '../css/ContentRowTop.css'
import TotalOf from './TotalOf';
import { useState, useEffect } from 'react'

export default function ContentRowTop() {
    const [productos, setProductos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    // Productos
    useEffect(() => {
        fetch('http://localhost:1080/api/products', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            // console.log(data.countByCategory);
            setProductos({
            totalProductos: data.count,
            totalCategorias: Object.keys(data.countByCategory).length

            })
        })
        .catch(e => console.error(e));
    }, [])

    // Usuarios
    useEffect(() => {
        fetch('http://localhost:1080/api/users', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            setUsuarios({
            total: data.count

            })
        })
        .catch(e => console.error(e));
    }, [])
  
  
    return(
        <section id="panels">
            <TotalOf specificClass="all-products" count={productos.totalProductos} message="Total de Productos: " />
            <TotalOf specificClass="all-users" count={usuarios.total} message="Total de Usuarios: " />
            <TotalOf specificClass="all-categories" count={productos.totalCategorias} message="Total de Categorias: " />
        </section>
    );
};
import '../css/Categories.css';
import Category from './Category';
import { useState, useEffect } from 'react'
//this functional component is only for the product categories.

export default function Categories(){
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:1080/api/products')
        .then(response => response.json())
        .then(data => {
            setCategory(data.countByCategory)
        })
    },[])
    return(
        <article id="categories">
            <h2 id="categoryTitle">Total de Categorias de Productos:</h2>
            <div id="all-categories">
                <Category name={`RPM: 33 1/3 Diámentro: 7`} count={`Total: ${category['33 1/3 7']}`} />
                <Category name={`RPM: 33 1/3 Diámentro: 10`} count={`Total: ${category['33 1/3 10']}`} />
                <Category name={`RPM: 33 1/3 Diámentro: 12`} count={`Total: ${category['33 1/3 12']}`} />
                <Category name={`RPM: 45 Diámentro: 7`} count={`Total: ${category['45 7']}`} />
                <Category name={`RPM: 45 Diámentro: 10`} count={`Total: ${category['45 10']}`} />
                <Category name={`RPM: 45 Diámentro: 12`} count={`Total: ${category['45 12']}`} />
                <Category name={`RPM: 78 Diámentro: 7`} count={`Total: ${category['78 7']}`} />
                <Category name={`RPM: 78 Diámentro: 10`} count={`Total: ${category['78 10']}`} />
                <Category name={`RPM: 78 Diámentro: 12`} count={`Total: ${category['78 12']}`} />
            </div>
        </article>
    );
}
import '../css/Categories.css';
import Category from './Category';
//this functional component is only for the product categories.

export default function Categories(){
    return(
        <article id="categories">
            <h2 id="categoryTitle">Total de Categorias de Productos:</h2>
            <div id="all-categories">
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
            </div>
        </article>
    );
}
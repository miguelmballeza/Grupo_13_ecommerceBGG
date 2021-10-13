import '../css/Category.css';
//this functional component is only for the product categories.

export default function Category(props){
    return(
        <article id="category">
            <h2 id="everyCategoryTitle">{props.name}</h2>
            <p id="totalOfCategory"><b>{props.count}</b></p>
        </article>
    );
}
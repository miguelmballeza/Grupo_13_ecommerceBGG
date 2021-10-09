import '../css/ContentRowTop.css'
import TotalOf from './TotalOf';

export default function ContentRowTop() {
    return(
        <section id="panels">
            <TotalOf specificClass="all-products" count="" message="Total de Productos:" />
            <TotalOf specificClass="all-users" message="Total de Usuarios:" />
            <TotalOf specificClass="all-categories" message="Total de Categorias:" />
        </section>
    );
};
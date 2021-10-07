import '../css/ContentWrapper.css';
import LastOne from '../components/LastOne';
import Categories from '../components/Categories';
import ListOf from '../components/ListOf';

export default function ContentWrapper() {
    return(
        <section id="ContentWrapper">
            <LastOne lastOneOf="user" info="información" />
            <LastOne lastOneOf="product" info="información" />
            <Categories />
            <ListOf listOf="users"   />
            <ListOf listOf="products"/>
        </section>
    );
};
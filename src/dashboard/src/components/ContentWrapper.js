import '../css/ContentWrapper.css';
import LastOne from '../components/LastOne';
import Categories from '../components/Categories';
import ListOf from './ListOfButton';

export default function ContentWrapper() {
    return(
        <section id="ContentWrapper">
            <div id="lastOnes">
                <LastOne lastOneOf="user" info="información" />
                <LastOne lastOneOf="product" info="información" />
            </div>
            <Categories />
            <div id="listsOf">
                <ListOf listOf="users"   />
                <ListOf listOf="products"/>
            </div>
        </section>
    );
};
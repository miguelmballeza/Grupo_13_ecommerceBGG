import '../css/ContentWrapper.css';
import LastOne from './LastOne';
import Categories from './Categories';
import ListOfButton from './ListOfButton';

export default function ContentWrapper() {
    return(
        <section id="ContentWrapper">
            <div id="lastOnes">
                <LastOne lastOneOf="user" info="información" />
                <LastOne lastOneOf="product" info="información" />
            </div>
            <Categories />
            <div id="listsOf">
                <ListOfButton listOf="Users"   />
                <ListOfButton listOf="Products"/>
            </div>
        </section>
    );
};
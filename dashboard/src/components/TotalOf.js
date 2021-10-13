import '../css/TotalOf.css'

export default function TotalOf(props) {
    return(
            <article className="all {props.specificClass}"><h2 id="total-of">{props.message}<br /><p>{props.count}</p></h2></article>
    );
};
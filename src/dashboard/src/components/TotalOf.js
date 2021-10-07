import '../css/TotalOf.css'

export default function TotalOf(props) {
    return(
            <article className="all {props.specificClass}"><h2 id="total-of">{props.message}</h2></article>
    );
};
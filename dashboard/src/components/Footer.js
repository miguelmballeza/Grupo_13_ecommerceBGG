import '../css/Footer.css';

export default function Footer(){
    return(
        <footer className="foot">
            <div id="footer-desktop-view">
                <div id="logo-social-networks">
                    <img id="BMGfoot" src="assets/logoBMG-blanco.png" alt="Logo del Sitio E-commerceBGG" />
                    <article className="social-networks">
                        <a href="/" className="social-logo" id="facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="/" className="social-logo" id="twitter">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                        <a href="/" className="social-logo" id="instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </article>
                </div>        
            </div>
            <h2>@2021 by BMG Records.<br></br>Todos los Derechos Reservados.</h2>
        </footer>
    );
}
import '../css/SideBar.css';

export default function SideBar() {
    return(
        <ul id="sidebar">
			<a className="sidebar-brand" href="/" >
				<div id="sidebar-brand-icon">
					<img id="icon" src="assets/logoBMG.png" alt="Logo de BMG Records"/>
				</div>
			</a>
			<hr className="sidebar-divider"/>
            <li className="nav-item">
				<a className="nav-link" href="/">
                    <img className="icons velocimeter" src="assets/velocimeter.png" alt="Velocimetro"/>
					<span>Dashboard</span>
                </a>
			</li>
            <hr className="sidebar-divider"/>
            <div className="sidebar-heading">Acciones</div>
			<li className="nav-item">
				<a className="nav-link" href="/">
                    <img className="icons panel" src="assets/control-panel.png" alt="Velocimetro"/>
					<span>Paneles</span>
				</a>
			</li>
		</ul>
    );
}
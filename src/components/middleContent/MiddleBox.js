import React, {Component} from 'react';
import SessionBox from './SessionBox.js';

/**
 * Componente para mostrar el contenido del medio de la vista (Entre la navbar y las sesiones)
 */
class MiddleBox extends Component{

	onClick(){

	}

	render(){
		return (
				<header className="masthead" id="porfolio">
					<div className="container">
						<div className="row">
							<SessionBox image = "img/portfolio/local.svg" tipoSesion = "pvpl"/>
							<SessionBox image = "img/portfolio/remoto.svg" tipoSesion = "pvpr"/>
							<SessionBox image = "img/portfolio/IA.svg" tipoSesion = "pvm"/>
						</div>
					</div>
				</header>
		)
	}
}

export default MiddleBox;

import React, {Component} from 'react';
import SessionBox from './SessionBox.js';

/**
 * Componente para mostrar el contenido del medio de la vista (Entre la navbar y las sesiones)
 */
class MiddleBox extends Component{
	render(){
		return (
				<header className="masthead" id="porfolio">
					<div className="container">
						<div className="row">
							<SessionBox image = "img/portfolio/local.svg" title = "Jugar localmente"/>
							<SessionBox image = "img/portfolio/remoto.svg" title = "Multijugador"/>
							<SessionBox image = "img/portfolio/IA.svg" title = "Jugar contra la máquina"/>
						</div>
					</div>
				</header>
		)
	}
}

export default MiddleBox;

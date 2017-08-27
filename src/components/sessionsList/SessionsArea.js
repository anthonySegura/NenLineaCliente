import React, {Component} from 'react';
import SessionBox from '../middleContent/SessionBox.js';

class SessionsArea extends Component{

	render(){
		return(
			<footer className="text-center">
				<div className="footer-above">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6">
								<h3>Mis Sesiones</h3>
								<SessionBox image = "img/portfolio/local.svg" title = "Jugar localmente"/>
								<SessionBox image = "img/portfolio/remoto.svg" title = "Multijugador"/>
								<SessionBox image = "img/portfolio/IA.svg" title = "Jugar contra la máquina"/>
							</div>
							<div className="col-md-6">
								<h3>Sesiones en espera</h3>
								<SessionBox image = "img/portfolio/local.svg" title = "Jugar localmente"/>
								<SessionBox image = "img/portfolio/remoto.svg" title = "Multijugador"/>
								<SessionBox image = "img/portfolio/IA.svg" title = "Jugar contra la máquina"/>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default SessionsArea;
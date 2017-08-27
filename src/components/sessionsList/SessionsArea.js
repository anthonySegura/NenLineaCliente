import React, {Component} from 'react';
import Session from './Session.js';

class SessionsArea extends Component{

	render(){
		return(
			<footer className="text-center">
				<div className="footer-above">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6">
								<h3>Mis Sesiones</h3>
							</div>
							<div className="col-md-6">
								<h3>Sesiones en espera</h3>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default SessionsArea;
import React, {Component} from 'react';
import Session from './Session.js';
import {sesionListener} from '../../sockets/socketCreator.js';

/**
 * Componente en donde aparecen las listas de sesiones en espera
 */
class SessionsArea extends Component{

	constructor(){
		super();
		this.state = {
			sesiones: []
		}
		this.onReceived = this.onReceived.bind(this);
		this.renderSessions = this.renderSessions.bind(this);
	}

	/**
	 * Callback para manejar el evento onReceived del socket
	 * @param data
	 */
	onReceived(data){
		console.log(data);
		this.setState({
			sesiones: data.sesiones
		});
	}

	componentWillMount(){
		// Se inicia el socket antes de montar el componente
		sesionListener(this.onReceived);
	}

	renderSessions(event){
		return(
			this.state.sesiones.map(function (value, index, array) {
				return <Session key = {index}
												user = {value.nickname}
												n2win = {value.n2win}
												nPartidas = {value.n_partidas}
												tamTablero = {value.tam_tablero}
				                idSesion = {value.id}
				                tiempoEspera = {value.tiempo_espera}
				                puntuacion = {value.puntuacion}
				                categoria = {value.categoria}
								/>
				}
			)
		)
	}

	// Renderiza dos columnas de sesiones
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
								{this.renderSessions()}
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default SessionsArea;
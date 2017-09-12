import React, {Component} from 'react';
import Session from './Session.js';
import baseConexion from '../../Contantes.js';
import Cable from 'actioncable';

/**
 * Componente en donde aparecen las listas de sesiones en espera
 */
class SessionsArea extends Component{

	constructor(){
		super();
		this.state = {
			sesiones: []
		}
		this.renderSessions = this.renderSessions.bind(this);
	}

	createSocket(){
		let cable = Cable.createConsumer('wss://nenlinea-rails.herokuapp.com/cable');
		this.sesion = cable.subscriptions.create({
			channel: 'SesionesEnEsperaChannel'
		}, {
			connected: () => {
				console.log('conectado');
			},
			received: (data) => {
				console.log(data);
				/*let sesiones = this.state.sesiones;
				sesiones.push(data);*/
				this.setState({
					sesiones: data.sesiones
				})
			},
			obtenerSesionesEnEspera: function () {
				this.perform('obtenerSesionesEnEspera',{})
			}
		});
	}

	componentWillMount(){
		this.createSocket();
	}

	renderSessions(){
		return(
			this.state.sesiones.map(function (value, index, array) {
				return <Session user = 'Desconocido'
												n2win = {value.n2win}
												nPartidas = {value.n_partidas}
												tamTablero = {value.tam_tablero}/>
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
								{this.renderSessions()}
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
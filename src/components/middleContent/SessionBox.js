import React, {Component} from 'react';
import store from '../../store';
import {iniciarJuego, sendMessage, actualizarEstadoJuego} from '../../actionCreators';
import {newSession} from '../../sockets/socketCreator';

/**
 *  Componente para crear nuevas sesiones
 */
class SessionBox extends Component{

	constructor(){
		super();
		this.onClick = this.onClick.bind(this);
	}

	onReceived(data){
		console.log(data);
		if(data.action === 'message'){
			store.dispatch(sendMessage(data));
		}
		else if(data.action === 'Mover'){
			console.log("Actualizando el tablero");
			console.log(data);
			store.dispatch(actualizarEstadoJuego(data));
		}
		else if(data.action === 'Nueva Partida'){
			store.dispatch(actualizarEstadoJuego(data));
		}
	}

	/**
	 * FIXME: primero abrir un modal para obtener los datos de la sesion
	 * FIXME: crear el callback onReceived
	 * Evento para crear una nueva sesion
	 * Inicializa el socket
	 */
	onClick(){
		// FIXME: obtener la configuracion del usuario
		let game_config = {
			tamFila: 8,
			n2win: 4,
			tiempo_espera: 120,
			n_partidas: 1,
			tipo: 'pvp'
		}
		// Se crea el socket
		let session = newSession(this.onReceived, game_config, store.getState().user_info.nombre);
		// Se actualiza el store para renderizar la vista
		store.dispatch(iniciarJuego(game_config, session));
	}

	render(){
		return(
			<div className="col-sm-4">
				<div onClick={this.onClick}>
					<img className="img-fluid" src = {this.props.image} alt = "" style = {{borderRadius: '15px', paddingBottom: '2%'}}/>
				</div>
			</div>
		)
	}
}

export default SessionBox;
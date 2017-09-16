import React, {Component} from 'react';
import '../gameRoom/resources/styles.css';
import store from '../../store';
import {iniciarJuego} from '../../actionCreators';
import {joinSession} from '../../sockets/socketCreator';

/**
 * Componente para visualizar una sesión en espera
 */
class Session extends Component{

	constructor(){
		super();
		this.onClick = this.onClick.bind(this);
	}

	/**
	 * Evento del boton
	 * Solicita unirse a una sesion en espera
	 * Inicializa el socket
	 */
	onClick(){
		let game_config = {
			tamFila: this.props.tamTablero,
			tamTablero: this.props.tamTablero,
			n2win: this.props.n2win,
			tiempo_espera: this.props.tiempoEspera
		}
		// Se crea el socket
		let session = joinSession(this.props.idSesion, store.getState().user_info.nombre);
		// Se actualiza el store para renderizar la vista
		// FIXME: iniciar el juego despues de recibir confirmación
		store.dispatch(iniciarJuego(game_config, session));
	}

	render(){
		const boxStyle = {
			background: '#202e3c',
			borderRadius: '15px',
			margin: '10%',
			paddingTop: '5%'
		};

		return(
			<div style={boxStyle}>
				<div className="inner" style={{paddingBottom: '5%'}}>
					<h6>{this.props.user}</h6>
					<h6>N2Win : {this.props.n2win}</h6>
					<h6>Cantidad de partidas : {this.props.nPartidas}</h6>
					<h6>Tamaño del tablero : {this.props.tamTablero} x {this.props.tamTablero}</h6>
					<button className="btn btn-success"
					        style={{marginTop: '5%'}}
									onClick={this.onClick}>
									Unirse
					</button>
				</div>
			</div>
		)
	}
}

export default Session;
import React, {Component} from 'react';
import '../gameRoom/resources/styles.css';
import store from '../../store';
import {iniciarJuego, sendMessage} from '../../actionCreators';
import {joinSession} from '../../sockets/socketCreator';

/**
 * Componente para visualizar una sesión en espera
 */
class Session extends Component{

	constructor(){
		super();
		this.onClick = this.onClick.bind(this);
	}

	onReceived(data){
		console.log(data);
		if(data.action === 'message'){
			store.dispatch(sendMessage(data.message))
		}
	}


	/**
	 * Evento del boton
	 */
	onClick(){
		// FIXME: agregar la configuracion del juego
		// FIXME: crear el callback onReceived
		// Se crea el socket
		let session = joinSession(this.onReceived, this.props.idSesion);
		// Se actualiza el store para renderizar la vista
		store.dispatch(iniciarJuego({}, session));
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
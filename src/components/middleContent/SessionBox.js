import React, {Component} from 'react';
import store from '../../store';
import {iniciarJuego} from '../../actionCreators';
import {newSession} from '../../sockets/socketCreator';

/**
 *  Componente para crear nuevas sesiones
 */
class SessionBox extends Component{

	/**
	 * FIXME: primero abrir un modal para obtener los datos de la sesion
	 * FIXME: crear el callback onReceived
	 * Evento para crear una nueva sesion
	 */
	onClick(){
		// Se crea el socket
		let session = newSession(() => {}, {});
		// Se actualiza el store para renderizar la vista
		store.dispatch(iniciarJuego({}, session));
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
import React, {Component} from 'react';
import store from '../../store';
import {iniciarJuego, openModal} from '../../actionCreators';
import {newSession} from '../../sockets/socketCreator';
import GameConfig from './GameConfig';

/**
 *  Componente para crear nuevas sesiones
 */
class SessionBox extends Component{

	constructor(){
		super();
		this.state = {
			showModal: true
		}
		this.onClick = this.onClick.bind(this);
	}

	/**
	 * FIXME: primero abrir un modal para obtener los datos de la sesion
	 * Evento para crear una nueva sesion
	 * Inicializa el socket
	 */
	onClick(){
		store.dispatch(openModal(this.props.tipoSesion));
	}

	render(){
		let closeModal = () => this.setState({showModal: false});
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
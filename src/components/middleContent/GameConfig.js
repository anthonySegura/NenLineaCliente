import React, {Component} from 'react';
import store from '../../store';
import {closeModal, iniciarJuego} from "../../actionCreators";
import {newSession} from "../../sockets/socketCreator";

class GameConfig extends Component{

	constructor(){
		super();
		this.state = {
					tamFila: '5x5',
					n2win: 4,
					tiempo_espera: 120,
					n_partidas: 1,
				 	tipo: 'pvp'
		}
		this.iniciarSesion = this.iniciarSesion.bind(this);
	}

	close(){
		store.dispatch(closeModal());
	}

	iniciarSesion(){
		let game_config = {
			tamFila: parseInt(this.state.tamFila[0]),
			n2win: this.state.n2win,
			tiempo_espera: this.state.tiempo_espera,
			n_partidas: this.state.n_partidas,
			tipo: store.getState().tipoSesion
		};
		// Se inicializa el socket
		let session = newSession(game_config, store.getState().user_info.nombre);
		store.dispatch(iniciarJuego(game_config, session));
	}

	render(){
		if(this.props.isOpen === false || this.props.isOpen === undefined)
			return null;

		const inline = {
			display: 'inline-flex'
		}

		let modalStyle = {
			position: 'fixed',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			zIndex: '9999',
			background: '#fff',
			borderRadius: '15px'
		}

		let backdropStyle = {
			position: 'absolute',
			width: '100%',
			height: '100%',
			top: '0px',
			left: '0px',
			zIndex: '9998',
			background: 'rgba(0, 0, 0, 0.3)'
		}

		return (
			<div style={modalStyle} className="GameConfig">
				<div className="portfolio-modal modal-fade full-screen"  tabindex="-1" role="dialog" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="container">
								<div className="row">
									<div className="col-lg-8 mx-auto">
										<div className="modal-body">
											<h3>Configuración de la sesión</h3>
											<div className="row">
												<ul className="list-inline item-details">
													<li style={inline}>
														<div className="input-group">
															<span className="input-group-addon">Tamaño del Tablero</span>
															<select className="custom-select" value={this.state.tamFila} onChange={e => {this.setState({tamFila: e.target.value})}}>
																<option>5x5</option>
																<option>6x6</option>
																<option>7x7</option>
																<option>8x8</option>
																<option>9x9</option>
															</select>
														</div>
													</li>
													<li style={inline}>
														<div className="input-group">
															<span className="input-group-addon">Seguidas para ganar</span>
															<select className="custom-select">
																<option>4</option>
																<option>5</option>
																<option>6</option>
															</select>
														</div>
													</li>
													<li style={inline}>
														<div className="input-group">
															<span className="input-group-addon">Partidas</span>
															<input class="text form-control"
															       placeholder=""
															       aria-describedby="basic-addon1"
															       value={this.state.n_partidas}
															       onChange={e => {this.setState({n_partidas: e.target.value})}}/>
														</div>
													</li>
												</ul>
												<div style={inline}>
													<button className="btn btn-success" style={{margin: '2%'}} onClick={this.iniciarSesion}>Aceptar</button>
													<button className="btn btn-danger" style={{margin: '2%'}} onClick={this.close}>Cancelar</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default GameConfig;
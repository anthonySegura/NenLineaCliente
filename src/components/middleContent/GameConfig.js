import React, {Component} from 'react';
import store from '../../store';
import {closeModal, iniciarJuego} from "../../actionCreators";
import {newSession, sessionIA} from "../../sockets/socketCreator";
import {validarUsuario} from "../../serverRequests";

class GameConfig extends Component{

	constructor(){
		super();
		// Configuración standard
		this.state = {
					tamFila: '5x5',
					n2win: 4,
					tiempo_espera: 120,
					n_partidas: 1,
				 	tipo: 'pvp',
					dificultad: ''
		}
		this.iniciarSesionRemota = this.iniciarSesionRemota.bind(this);
		this.iniciarSesionIA = this.iniciarSesionIA.bind(this);
		this.setNpartidas = this.setNpartidas.bind(this);
	}

	close(){
		store.dispatch(closeModal());
	}

	iniciarSesionRemota(){
		let game_config = {
			tamFila: parseInt(this.state.tamFila[0]),
			n2win: parseInt(this.state.n2win),
			tiempo_espera: this.state.tiempo_espera,
			n_partidas: this.state.n_partidas,
			tipo: store.getState().tipoSesion,
			rival: 'Esperando Jugador'
		};
		// Se inicializa el socket
		let session = newSession(game_config, store.getState().user_info.nombre);
		store.dispatch(iniciarJuego(game_config, session));
	}

	iniciarSesionIA(){
		let game_config = {
			tamFila: parseInt(this.state.tamFila[0]),
			n2win: parseInt(this.state.n2win),
			tiempo_espera: this.state.tiempo_espera,
			n_partidas: this.state.n_partidas,
			tipo: store.getState().tipoSesion,
			rival: 'Esperando Jugador'
		};
		let session = sessionIA(game_config, store.getState().user_info.nombre);
		store.dispatch(iniciarJuego(game_config, session));
	}

	setOnClickEvent(){
		switch (store.getState().tipoSesion){
			case 'pvpr':
				return this.iniciarSesionRemota;
			case 'pvm':
				return this.iniciarSesionIA;
		}
	}

	setNpartidas(value){
		const numbers = ['1','2','3','4','5','6','7','8','9','0'];
		console.log(value);
	}


	renderIAOptions(){
		if(store.getState().tipoSesion === "pvm"){
			return(
				<div className="col-xs-3">
					<div className="input-group" style={{margin: '5%'}}>
						<span className="input-group-addon">Dificultad</span>
						<select className="form-control" value={this.state.dificultad}>
							<option>Fácil</option>
							<option>Medio</option>
							<option>Difícil</option>
						</select>
					</div>
				</div>
			)
		}
	}

	render(){
		if(this.props.isOpen === false || this.props.isOpen === undefined)
			return null;

		const inline = {
			marginTop: '10%',
			display: 'inline-flex'
		}

		const modalStyle = {
			position: 'fixed',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			zIndex: '9999',
			background: '#fff',
			borderRadius: '15px'
		}

		const option = {
			margin: '5%'
		}

		return (
			<div style={modalStyle} className="GameConfig">
				<div className="portfolio-modal modal-fade full-screen"  tabIndex="-1" role="dialog" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="container">
								<div className="row">
									<div className="col-lg-8 mx-auto">
										<div className="panel">
											<h3>Configuración de la sesión</h3>
											<div className="col-xs-3">
												<div className="input-group" style= {option}>
													<span className="input-group-addon">Tamaño del Tablero</span>
													<select className="form-control" value={this.state.tamFila} onChange={(e) => this.setState({tamFila: e.target.value})}>
														<option>5x5</option>
														<option>6x6</option>
														<option>7x7</option>
														<option>8x8</option>
														<option>9x9</option>
													</select>
												</div>
											</div>
											<div className="col-xs-3">
												<div className="input-group" style= {option}>
													<span className="input-group-addon">Seguidas para ganar</span>
													<select className="form-control" value={this.state.n2win} onChange={(e) => {this.setState({n2win: e.target.value})}}>
														<option>4</option>
														<option>5</option>
														<option>6</option>
													</select>
												</div>
											</div>
											<div className="col-xs-3">
												<div className="input-group" style= {option}>
													<span className="input-group-addon">Partidas</span>
													<input className="text form-control"
													       placeholder=""
																 aria-describedby="basic-addon1"
													       value={this.state.n_partidas}/>
												</div>
											</div>
											{this.renderIAOptions()}
											<div style={inline}>
												<button className="btn btn-success" style={{margin: '2%'}} onClick={this.setOnClickEvent()}>Aceptar</button>
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
		)
	}
}

export default GameConfig;
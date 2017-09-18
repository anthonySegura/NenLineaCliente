import React, {Component} from 'react';
import './resources/styles.css';
import Board from './Board.js';
import {Grid, Row, Col} from 'react-bootstrap';
import Chat from './Chat';
import UserContainer from './UserContainer';
import fichaLocal from './resources/circle-light.svg';
import fichaRival from './resources/circle-dark.svg';
import fichaIA from './resources/HAL9000.svg';

import store from '../../store';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class SessionView extends Component{

	constructor(){
		super();

		this.state = {
			game_config: store.getState().game_config
		}

		// Se suscribe el componente al store global. Escucha los cambios al estado del juego para actualizar la vista
		store.subscribe(() => {

			const local = store.getState().user_info.nombre;
			const fondoEspera = '#29666D';
			const fondoTurno = '#cd5c5c';

			if(store.getState().game_state === undefined || (this.refs.local === undefined || this.refs.rival === undefined)) return;
			// Se actualiza el indicador de turno
			if(store.getState().game_state.turno === local){
				this.refs.local.setBackground(fondoTurno);
				this.refs.rival.setBackground(fondoEspera);
			}
			else {
				this.refs.local.setBackground(fondoEspera);
				this.refs.rival.setBackground(fondoTurno);
			}

			// Se actualiza el nombre del rival en el momento que se conecta a la sesión
			// En caso de que este usuario se el creador de la sesion
			if(store.getState().game_state.rival){
				const rival = store.getState().game_state.rival;
				this.state.game_config.rival = rival;
				this.refs.rival.setUser(rival);
				if(store.getState().game_state.rival === 'CPU'){
					this.refs.rival.setImg(fichaIA);
				}
				NotificationManager.info(`${rival} se ha unido a la sesión`);
			}
		});
	}

	render(){

		const tableStyle = {
			borderRadius: '15px',
			background: '#fff',
		}

		const text = {
			paddingTop: '5%',
		}

		return(
				<header className="masthead">
					<NotificationContainer/>
					<Grid>
						<Row style = {tableStyle}>
							<Col sm = {8}>
								<Board ref = "tablero" tamFila = {store.getState().game_config.tamFila}/>
							</Col>
							<Col className = "game-background" sm = {4} style = {{background: '#29666D'}}>
								<div className="sidebar">
									<UserContainer ref = "local" user = {store.getState().user_info.nombre} img = {fichaLocal}/>
									<UserContainer ref = "rival" user = {this.state.game_config.rival} img = {fichaRival}/>
									<Chat/>
								</div>
							</Col>
						</Row>
					</Grid>
				</header>
		)
	}
}

export default SessionView;

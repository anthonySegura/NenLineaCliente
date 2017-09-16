import React, {Component} from 'react';
import './resources/styles.css';
import Board from './Board.js';
import {Grid, Row, Col} from 'react-bootstrap';
import Chat from './Chat';
import UserContainer from './UserContainer';
import fichaLocal from './resources/circle-light.svg';
import fichaRival from './resources/circle-dark.svg';

import store from '../../store';

class SessionView extends Component{


// <ul className="players">
// <UserContainer user = {store.getState().user_info.nombre} img = {fichaLocal}/>
// <UserContainer user = 'Esperando Rival' img = {fichaRival}/>
// </ul>

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
					<Grid>
						<Row style = {tableStyle}>
							<Col sm = {8}>
								<Board tamFila = {store.getState().game_config.tamFila}/>
							</Col>
							<Col className = "game-background" sm = {4} style = {{background: '#29666D'}}>
								<div className="sidebar">
									<UserContainer user = {store.getState().user_info.nombre} img = {fichaLocal} background = '#cd5c5c'/>
									<UserContainer user = {'Esperando Jugador'} img = {fichaRival} background = '#29666D'/>
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

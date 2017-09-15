import React, {Component} from 'react';
import './resources/styles.css';
import Board from './Board.js';
import {Grid, Row, Col} from 'react-bootstrap';
import Chat from './Chat';
import Notifications, {notify} from 'react-notify-toast';

import store from '../../store';

class SessionView extends Component{

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
						<Col sm = {4} style = {{background: '#29666D'}}>
							<div>
								<h3 style={text}>Espacio para el jugador 1</h3>
								<h3 style={text}>Espacio para el jugador 2</h3>
								<div>
									<Chat/>
								</div>
							</div>
						</Col>
					</Row>
				</Grid>
			</header>
		)
	}
}

export default SessionView;

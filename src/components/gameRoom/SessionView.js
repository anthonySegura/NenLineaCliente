import React, {Component} from 'react';
import './resources/styles.css';
import Board from './Board.js';
import {Grid, Row, Col} from 'react-bootstrap';

class SessionView extends Component{

	render(){

		return(
			<header className="masthead">
				<Grid>
					<Row>
						<Col sm = {8}>
							<Board tamFila = {8}/>
						</Col>
						<Col sm = {4}>
							<div>
								<h3>Aquí va el turno y el nombre de los jugadores</h3>
								<h3>Aquí va el Chat</h3>
							</div>
						</Col>
					</Row>
				</Grid>
			</header>
		)
	}
}

export default SessionView;

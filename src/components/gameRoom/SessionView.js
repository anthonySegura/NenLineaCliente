import React, {Component} from 'react';
import './resources/styles.css';
import Board from './Board.js';
import {Grid, Row, Col} from 'react-bootstrap';

class SessionView extends Component{

	render(){

		const sideBar = {
			background: '#29666D'
		}

		const tableStyle = {
			background: '#fff'
		}

		const text = {
			paddingTop: '5%',
		}

		return(
			<header className="masthead">
				<Grid>
					<Row style = {tableStyle}>
						<Col sm = {8}>
							<Board tamFila = {8}/>
						</Col>
						<Col sm = {4} style = {sideBar}>
							<div>
								<h3 style={text}>Espacio para el jugador 1</h3>
								<h3 style={text}>Espacio para el jugador 2</h3>
								<h3 style={text}>Aquí va el Chat</h3>
							</div>
						</Col>
					</Row>
				</Grid>
			</header>
		)
	}
}

export default SessionView;

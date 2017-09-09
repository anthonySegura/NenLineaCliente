import React, {Component} from 'react';
import './resources/styles.css';
import Board from './Board.js';

class SessionView extends Component{
	render(){
		return(
			<header className="masthead">
				<div className="game-board">
					<Board tamFila = {8}/>
				</div>
			</header>
		)
	}
}

export default SessionView;

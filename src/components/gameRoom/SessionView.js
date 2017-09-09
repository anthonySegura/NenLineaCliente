import React, {Component} from 'react';
import Board from './Board.js';

class SessionView extends Component{
	render(){
		return(
			<header className="masthead" id="gameBoard">
				<span><h3>Aqui va el marcador y el turno</h3></span>
				<div className="row">
					<Board tamFila = {8}/>
				</div>
			</header>
		)
	}
}

export default SessionView;

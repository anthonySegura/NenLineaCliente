
import React, {Component} from 'react';
import store from '../../store';

import backgroundImg from './resources/circle-placeholder-bright.svg';
import fichaRival from './resources/circle-light.svg';
import fichaRivalWinner from './resources/circle-light-winner.svg';
import fichaWinner from './resources/circle-dark-winner.svg';

class Card extends Component{
	constructor() {
		super();
		this.state = {
			img: backgroundImg
		}
		this.onClick = this.onClick.bind(this);
		// La ficha escucha los cambios al estado para actualizarse
		store.subscribe(() => {
			if(store.getState().game_state) {
				let game_state = store.getState().game_state;
				let fila = game_state.fila;
				let columna = game_state.columna;
				// Verifica si la posicion es la de esta ficha
				if (fila === this.props.fila && columna === this.props.columna) {
					let ficha = (store.getState().game_state.turno === store.getState().user_info.nombre) ? this.props.cardImg : fichaRival;
					this.setState({
						img: ficha
					});
				}
			}
		});
	}

	to1DIndex(row,column){
		let size = store.getState().game_config.tamFila;
		return size*row+column;
	}

	onClick(){
		let game_state = store.getState().game_state;
		let user = store.getState().user_info.nombre;
		if(game_state.game_state === 'Playing' && game_state.turno === user) {
			let socket = store.getState().session_socket
			socket.mover(this.props.columna);
		}
	}

	render(){
		return(
			<td className={"cell-" + this.props.fila + "-" + this.props.columna + " selectable"} key = {this.props.fila + this.props.columna}>
				<img className="placeholder" src= {this.state.img} alt = ""  onClick = {this.onClick} id = {this.props.fila + ':' + this.props.columna}/>
			</td>
		)
	}
}

export default Card;

import React, {Component} from 'react';
import store from '../../store';
import backgroundImg from './resources/circle-placeholder-bright.svg';
import fichaRival from './resources/circle-light.svg';
import fichaRivalWinner from './resources/circle-light-winner.svg';
import fichaWinner from './resources/circle-dark-winner.svg';
import fichaCPU from './resources/HAL9000.svg';

class Card extends Component{

	constructor() {
		super();
		this.state = {
			img: backgroundImg,
			classStyle: 'placeholder'
		}
		this.onClick = this.onClick.bind(this);
		this.showWinnerPosition = this.showWinnerPosition.bind(this);
		this.applyWinnerStyle = this.applyWinnerStyle.bind(this);
		this.clearCard = this.clearCard.bind(this);
		// La ficha escucha los cambios al estado para actualizarse
		this.listenToChanges();
	}

	/**
	 * Funcion auxiliar para convertir posiciones de matrix a arreglo
	 * @param row
	 * @param column
	 * @returns {indice}
	 */
	to1DIndex(row,column){
		let size = store.getState().game_config.tamFila;
		return size*row+column;
	}

	/**
	 * Cambia la imagen por la imagen de la ficha seleccionada por el jugador
	 * @param {*position} row 
	 * @param {*position} column 
	 */
	putCard(row, column){
		// Verifica si la posicion es la de esta ficha
		if (row === this.props.fila && column === this.props.columna) {
			//let img = (store.getState().game_config.rival === 'CPU')? fichaCPU : this.props.cardImg;
			let ficha = (store.getState().game_state.turno === store.getState().user_info.nombre) ? this.props.cardImg : fichaRival;
			this.setState({
				img: ficha
			});
		}
	}

	/**
	 * Resalta las fichas ganadoras
	 * @param winners
	 */
	showWinnerPosition(winners){
		winners.map(i => {
			if(this.to1DIndex(this.props.fila, this.props.columna) === i){
				let winnerCard = (store.getState().game_state.turno === store.getState().user_info.nombre) ? fichaWinner : fichaRivalWinner;
				this.setState({
					img: winnerCard
				});
			}
		});
		this.applyWinnerStyle();
	}

	applyWinnerStyle(){
		this.setState({
			classStyle: 'winnerCard placeholder'
		});
	}

	clearCard(){
		this.setState({
			img: backgroundImg,
			classStyle: 'placeholder'
		})
	}

	/**
	 * Subscribe el componente al store global
	 */
	listenToChanges(){
		store.subscribe(() => {

			if(store.getState().game_state) {
				let game_state = store.getState().game_state;
				let fila = game_state.fila;
				let columna = game_state.columna;
				if(store.getState().restart){
					this.clearCard();
				}
				// Si hay ganador
				else if(game_state.game_state !== 'Playing') {
					let winners = game_state.fichas_ganadoras;
					this.showWinnerPosition(winners);
					return;
				}
				// Se marca la ficha
				this.putCard(fila, columna);
			}
		});
	}

	onClick(){
		let game_state = store.getState().game_state;
		let user = store.getState().user_info.nombre;
		if(game_state && game_state.game_state === 'Playing' && game_state.turno === user) {
			let socket = store.getState().session_socket
			socket.mover(this.props.columna);
		}
	}

	render(){
		return(
			<td className={"cell-" + this.props.fila + "-" + this.props.columna + " selectable"} key = {this.props.fila + this.props.columna}>
				<img className={"placeholder " + this.state.classStyle} src= {this.state.img} alt = ""  onClick = {this.onClick} id = {this.props.fila + ':' + this.props.columna}/>
			</td>
		)
	}
}

export default Card;
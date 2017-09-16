import React , {Component} from 'react';
import Card from './Card';
import store from '../../store';

import fichaLocal from './resources/circle-dark.svg';

class Board extends Component{

	constructor(){
		super();
		this.renderCell = this.renderCell.bind(this);
	}

	renderCell(fila, columna){
		return(
			<Card fila = {fila} columna = {columna} cardImg = {fichaLocal} key = {`card_${fila}_${columna}`}/>
		)
	}

	renderRows(){
		let rows = [];
		for(let i = 0; i < this.props.tamFila; i++){
			let columns = [];
			for(let j = 0; j < this.props.tamFila; j++){
				columns.push(this.renderCell(i, j));
			}
			rows.push(<tr>{columns}</tr>);
		}
		return rows;
	}

	render(){
		return(
			<div id="connect4" className="container-fluid">
				<table>
					<tbody>
						{this.renderRows()}
					</tbody>
				</table>
			</div>
		)
	}
}
export default Board;
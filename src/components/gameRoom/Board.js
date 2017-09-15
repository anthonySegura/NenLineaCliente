import React , {Component} from 'react';
import Card from './Card';

import fichaLocal from './resources/circle-dark.svg';

class Board extends Component{

	renderCell(fila, columna){
		return(
			<Card fila = {fila} columna = {columna} cardImg = {fichaLocal}/>
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
			<div id="connect4">
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
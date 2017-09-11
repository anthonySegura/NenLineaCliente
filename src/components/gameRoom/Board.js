import React , {Component} from 'react';
import ficha from './resources/circle-placeholder-bright.svg';

class Board extends Component{
	renderCell(fila, columna){
		return(
			<td className={"cell-" + fila + "-" + columna + " selectable"} key= {fila + ',' + columna}>
				<img className="placeholder" src= {ficha} alt = ""  />
			</td>
		)
	}

	renderRows(){
		let rows = []
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
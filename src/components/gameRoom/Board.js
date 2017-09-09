import React , {Component} from 'react';
import ficha from './resources/circle-placeholder-bright.svg';
import './resources/styles.css';

class Board extends Component{

	constructor(){
		super();
		this.renderRows = this.renderRows.bind(this);
	}

	renderCell(fila, columna){
		let border = {
			border: '0'
		}
		return(
			<td className="cell-0-0 selectable" key= {fila + ',' + columna}>
				<img className="placeholder" src= {ficha} alt = "" style={border}/>
			</td>
		)
	}

	renderRows(){
		let rows = [];
		for(var i = 0; i < this.props.tamFila; i++){
			let columns = [];
			for(var j = 0; j < this.props.tamFila; j++){
				columns.push(this.renderCell(i, j));
			}
			rows.push(<tr>{columns}</tr>);
		}
		return rows;
	}

	render(){
		return(
			<div className="container-fluid">
				<div id="connect4" className="board">
					<table className="table-responsive">
						<tbody>
							{this.renderRows()}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}
export default Board;
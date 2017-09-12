import React, {Component} from 'react';
import '../gameRoom/resources/styles.css';

/**
 * Componente para visualizar una sesión en espera
 */
class Session extends Component{

	render(){
		// Estilo para centrar los elementos verticalmente sobre la columna
		const centerStyle = {
			display: "flex",
      		"justifyContent": "center",
			background: '#202e3c',
			borderRadius: '10px',
			marginBottom: '15px',
			paddingTop: '5%'

		};

		const sessionStyle = {
			background: '#202e3c',
			borderRadius: '10px'
		}

		return(
			<div style={centerStyle}>
				<div className="inner" style={{paddingBottom: '5%'}}>
					<h6>{this.props.user}</h6>
					<h6>N2Win : {this.props.n2win}</h6>
					<h6>Cantidad de partidas : {this.props.nPartidas}</h6>
					<h6>Tamaño del tablero : {this.props.tamTablero} x {this.props.tamTablero}</h6>
					<button className="btn btn-success">Unirse</button>
				</div>
			</div>
		)
	}
}

export default Session;
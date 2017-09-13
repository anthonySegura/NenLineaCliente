import React, {Component} from 'react';
import '../gameRoom/resources/styles.css';

/**
 * Componente para visualizar una sesión en espera
 */
class Session extends Component{

	render(){

		const boxStyle = {
			background: '#202e3c',
			borderRadius: '15px',
			margin: '10%',
			paddingTop: '5%'
		};

		return(
			<div style={boxStyle}>
				<div className="inner" style={{paddingBottom: '5%'}}>
					<h6>{this.props.user}</h6>
					<h6>N2Win : {this.props.n2win}</h6>
					<h6>Cantidad de partidas : {this.props.nPartidas}</h6>
					<h6>Tamaño del tablero : {this.props.tamTablero} x {this.props.tamTablero}</h6>
					<button className="btn btn-success"
					        style={{marginTop: '5%'}}>
									Unirse
					</button>
				</div>
			</div>
		)
	}
}

export default Session;
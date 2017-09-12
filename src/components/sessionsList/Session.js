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
				<div className="inner">
					<h3>Nombre</h3>
					<h3>N2WIN</h3>
					<h3>Cantidad de partidas</h3>
					<h3>Tamaño del tablero</h3>
				</div>
			</div>
		)
	}
}

export default Session;
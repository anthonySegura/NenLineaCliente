import React, {Component} from 'react';

/**
 * Componente para visualizar una sesión en espera
 */
class Session extends Component{

	render(){
		// Estilo para centrar los elementos verticalmente sobre la columna
		const centerStyle = {
			display: "flex",
      		"justifyContent": "center"
		};

		return(
			<div style={centerStyle}>
				<h4>Soy un sesión en espera</h4>
			</div>
		)
	}
}

export default Session;
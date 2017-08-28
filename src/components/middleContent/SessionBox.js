import React, {Component} from 'react';

/**
 *  Componente para crear nuevas sesiones
 */
class SessionBox extends Component{

	render(){
		return(
			<div className="col-sm-4">
				<div className="card">
					<img className="img-fluid" src = {this.props.image} title= {this.props.title} alt = ""/>
				</div>
			</div>
		)
	}
}

export default SessionBox;
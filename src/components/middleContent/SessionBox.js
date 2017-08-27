import React, {Component} from 'react';

/**
 * Cuadro para crear una nueva sesion
 */
class SessionBox extends Component{


	render(){

		return(
			<div className="col-sm-4">
				<div className="card">
					<img className="img-fluid" src = {this.props.image} title= {this.props.title}/>
				</div>
			</div>
		)
	}
}

export default SessionBox;
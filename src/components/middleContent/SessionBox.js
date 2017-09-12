import React, {Component} from 'react';

/**
 *  Componente para crear nuevas sesiones
 */
class SessionBox extends Component{

	render(){
		return(
			<div className="col-sm-4">
				<div>
					<img className="img-fluid" src = {this.props.image} alt = "" style = {{borderRadius: '15px', paddingBottom: '2%'}}/>
				</div>
			</div>
		)
	}
}

export default SessionBox;
import React, {Component} from 'react';
import './resources/styles.css';

class UserContainer extends Component{


// <div className="container" style={{backgroundColor: this.state.background, margin: '0'}}>
// <div className="row">
// <div className="col-xs-3" style={itemStyle}>
// <h6 style={{display: 'inline-block'}}>{this.props.user}</h6>
// </div>
// <div className="col-xs-3" style={itemStyle}>
// {this.props.marcador}
// </div>
// <div className="col-xs-3" style={itemStyle}>
// <img className="img-fluid" src={this.props.img} height= '30px' width= '30px'/>
// </div>
// </div>
// </div>

	render(){

		const itemStyle = {
			marginTop: '1%',
			marginBottom: '1%'
		}

		return(
				<div className="row" style= {{backgroundColor: this.props.background}}>
					<div className="col-md-4" style={itemStyle}>
						{this.props.user}
					</div>
					<div className="col-md-4" style={itemStyle}>
						{0}
					</div>
					<div className="col-md-4" style={itemStyle}>
						<img src = {this.props.img} alt = "" height={25} width={25}/>
					</div>
				</div>
		)
	}
}

export default UserContainer;
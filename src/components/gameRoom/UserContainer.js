import React, {Component} from 'react';
import './resources/styles.css';

class UserContainer extends Component{

	constructor(){
		super();
		this.state = {
			background: '',
			nickname: ''
		}
		this.setBackground = this.setBackground.bind(this);
	}

	setBackground(img){
		this.setState({
			background: img
		});
	}

	setUser(nickname){
		this.setState({
			nickname: nickname
		})
	}

	render(){

		const itemStyle = {
			marginTop: '1%',
			marginBottom: '1%'
		}

		return(
				<div className="row" style= {{backgroundColor: (this.state.background === '')? '#29666D' : this.state.background}}>
					<div className="col-md-4" style={itemStyle}>
						{(this.state.nickname === '') ? this.props.user : this.state.nickname}
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
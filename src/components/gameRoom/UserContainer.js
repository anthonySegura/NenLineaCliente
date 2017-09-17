import React, {Component} from 'react';
import './resources/styles.css';

class UserContainer extends Component{

	constructor(){
		super();
		this.state = {
			background: '',
			nickname: '',
			img: ''
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
		});
	}

	setImg(img){
		this.setState({
			img: img
		});
	}

	render(){

		const itemStyle = {
			marginTop: '2%',
			marginBottom: '2%'
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
						<img src = {(this.state.img === '')? this.props.img : this.state.img} alt = "" height={25} width={25}/>
					</div>
				</div>
		)
	}
}

export default UserContainer;
import React, {Component} from 'react';
import store from '../../store';

class Chat extends Component{

	constructor(){
		super();
		this.state = {
			messages: [],
			session_socket: store.getState().session_socket,
			message_content: ''
		}
		this.setMessage = this.setMessage.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
		// Se subscribe el chat al store para que actualice los mensajes entrantes
		store.subscribe(() => {
			this.setState({
				messages: store.getState().messages
			});
		})
	}

	setMessage(msg){
		this.setState({
			message_content: msg
		});
	}

	sendMessage(){
		let name = store.getState().user_info.nombre;
		this.state.session_socket.enviarMensaje(this.state.message_content, name);
		this.setState({
			message_content: ''
		});
	}

	renderMessages(){

		const messageStyle = {
			textAlign: 'left',
			paddingLeft: '5%',
			paddingTop: '5%',
			paddingBottom: '5%',
			marginBottom: '5px',
			marginRight: '5px',
			width: '80%',height: '80%',
			backgroundColor: 'rgb(24, 188, 156)',
			borderRadius: '5px'
		}

		return this.state.messages.map(function (value, index, array) {
			return(
				<li style={messageStyle}>{value.send_by + ": " + value.message}</li>
			);
		})
	}

	render(){

		const chatStyle = {
			background: '#2C3E50',
			borderRadius: '15px',
			margin: '10%',
			paddingTop: '5%',
			paddingBottom: '10%',
		};

		const listStyle = {
			listStyle: 'none',
			maxHeight: '140px',
			borderRadius: '5px',
			width: '100%',
			height: '100%',
			paddingTop: '10%',
			overflow: 'auto'
		}

		const divStyle = {
			paddingLeft:'5%',
			paddingRight: '5%',
			paddingBottom: '10%'
		}

		// No se muestra en las sesiones contra el jugador automático
		if(store.getState().tipoSesion === 'pvm') return null;

		return(
			<div style={chatStyle}>
				<h3 style={{padding: '5%'}}>CHAT</h3>
				<div style = {divStyle}>
					<ul style={listStyle}>
						{this.renderMessages()}
					</ul>
				</div>
				<div style={{display: 'flex'}}>
					<input type="text"
					       placeholder= "Escribe tu mensaje"
					       style={{width:'80%', borderRadius: '5px', marginLeft: '3%'}}
					       value = {this.state.message_content}
						   onChange = {(e) => this.setMessage(e.target.value)}	/>
					<button className="btn btn-success"
					        onClick={(e) => this.sendMessage()}
							style={{margin : '2%', borderRadius: '10px'}}>
							<i className="fa fa-paper-plane" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		)
	}
}

export default Chat;
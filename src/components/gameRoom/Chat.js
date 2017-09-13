import React, {Component} from 'react';
import store from '../../store';

class Chat extends Component{

	constructor(){
		super();
		this.state = {
			messages: [],
			session_socket: store.getState().session_socket
		}

		// Se subscribe el chat al store para que actualice los mensajes entrantes
		store.subscribe(() => {
			this.setState({
				messages: store.getState().messages
			})
		})
	}

	renderMessages(){

		const listStyle = {
			listStyle: 'none',
			//backgroundColor: 'rgba(139,195,74,0.46)',
			borderRadius: '5px',
			width: '100%',
			height: '100%',

			paddingTop: '10%',
		}

		const messageStyle = {
			textAlign: 'left',
			paddingLeft: '5%',
			paddingTop: '5%',
			paddingBottom: '5%',
			marginBottom: '5px',
			marginRight: '5px',
			width: '80%',height: '80%',
			backgroundColor: 'rgba(139,195,74,0.46)',
			borderRadius: '5px'
		}

		const divStyle = {
			paddingLeft:'5%',
			paddingRight: '5%',
			paddingBottom: '10%'
		}

		return(
			<div style={divStyle}>
				<ul style={listStyle}>
					{this.state.messages.map(function (value, index, array) {
						return <ul style={listStyle}>
							<li style={messageStyle}>{value.message}</li>
						</ul>
					})}
				</ul>
			</div>
		)
	}

	render(){

		const chatStyle = {
			background: '#2C3E50',
			borderRadius: '15px',
			margin: '10%',
			paddingTop: '5%',
			paddingBottom: '10%'
		};

		return(
			<div style={chatStyle}>
				<h3 style={{padding: '5%'}}>CHAT</h3>
				{this.renderMessages()}
				<input type="text" placeholder="Escribe tu mensaje" style={{width:'80%'}}/>
				<button className="btn btn-success" onClick={store.getState().session_socket.enviarMensaje('hola')}>Enviar</button>
			</div>
		)
	}
}

export default Chat;
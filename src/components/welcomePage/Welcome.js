import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import store from  '../../store';
import {login} from '../../actionCreators';
import {validarUsuario} from "../../serverRequests";

//import background from './background.png';

class Welcome extends Component{

	// Eventos para el login de Google
	success(response){
		console.log('respuesta de google');
		// Se guardan los datos necesarios del usuario
		let userData = {
			googleId: response.googleId,
			email: response.profileObj.email,
			nombre: response.profileObj.givenName,
			imageUrl: response.profileObj.imageUrl
		};
		store.dispatch(login(true, userData));
		// Se almacenan los datos necesarios en el LocalStorage
		localStorage.setItem('userData', JSON.stringify(userData));
		// Se verifica el usuario en el server
		validarUsuario(userData);
	}

	render(){

		const centered = {
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)"
		}

		const textStyle = {
			paddingBottom: "2em",
			color: "white"
		}

		return(
			<div className="welcome">
				<div style= {centered}>
					<h2 className="text-center" style={textStyle}>N En Línea</h2>
					<GoogleLogin
						clientId = "730064414140-pddt1udno397off9gdmj3so2teom4fv8.apps.googleusercontent.com"
						onSuccess = {this.success.bind(this)}
						onFailure = {response => {}}
						onRequest = {response => {}}
						approvalPrompt="force"
						responseType="permission"
						scope = "profile email"
						isSignedIn={true}
					/>
				</div>
			</div>
		)
	}
}

export default Welcome;
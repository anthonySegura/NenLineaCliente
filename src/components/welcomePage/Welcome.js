import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
//import background from './background.png';

class Welcome extends Component{

	// Eventos para el login de Google
	success(response){
		this.props.login(response);
	
		let userData = {
			googleId: response.googleId,
			email: response.profileObj.email,
			nombre: response.profileObj.givenName,
			imageUrl: response.profileObj.imageUrl
		};
		// Se almacenan los datos necesarios en el localStorage
		localStorage.setItem('userData', JSON.stringify(userData));
	}

	error(response){

	}

	loading(response){

	}

	render(){
		// Estilos personalizados para esta vista
		const backgroundStyle = {
			width: "100%",
			height: "100%",
			position: "fixed",
			left: "0px",
			top: "0px",
			zIndex: "-1"
		}

		const stretch = {
			width: "100%",
      		height: "100%"
		}

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
			<div>
				<div style= {centered}>
					<h2 className="text-center" style={textStyle}>N En Línea</h2>
					<GoogleLogin
						clientId = "730064414140-pddt1udno397off9gdmj3so2teom4fv8.apps.googleusercontent.com"
						onSuccess = {this.success.bind(this)}
						onFailure = {this.error}
						onRequest = {this.loading}
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
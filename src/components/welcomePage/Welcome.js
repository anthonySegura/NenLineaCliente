import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import background from './background.png';

class Welcome extends Component{

	// Eventos para el login de Google
	success(response){
		this.props.login();
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
			paddingBottom: "2em"
		}

		return(
			<div style= {backgroundStyle}>
				<img src= {background} style={stretch}/>
				<div style= {centered}>
					<h2 className="text-center" style={textStyle}>N En Linea</h2>

					<GoogleLogin
						clientId = "730064414140-pddt1udno397off9gdmj3so2teom4fv8.apps.googleusercontent.com"
						onSuccess = {this.success.bind(this)}
						onFailure = {this.error}
						onRequest = {this.loading}
						approvalPrompt="force"
						responseType="code"
						isSignedIn={true}
					/>
				</div>
			</div>
		)
	}
}

export default Welcome;
import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar.js';
import MiddleBox from './components/middleContent/MiddleBox.js';
import SessionsArea from './components/sessionsList/SessionsArea.js';
import Welcome from './components/welcomePage/Welcome.js';
import SessionView from './components/gameRoom/SessionView.js';

class App extends Component {

	constructor(){
		super();
		this.state = {
			playing: false,
			logged: false
		}
		this.renderBody = this.renderBody.bind(this);
		this.login = this.login.bind(this);
	}

	componentWillMount(){
		// Se consultan los datos locales de usuario
		var userData = JSON.parse(localStorage.getItem('userData'));
		if(userData != null){
			this.setState({
				logged: true
			})
		} 
	}

	/**
	 * Evento que se pasa a la vista de inicio si el login es exitoso
	 */
	login(){
		this.setState({
			logged: true
		})
	}

	/**
	 * Renderiza el contenido de la vista principal
	 */
	renderBody(){
		// Si el usuario ya esta logueado
		if(this.state.logged){
			// Se renderiza la vista principal
			if(!this.state.playing){
				return(
					<div className="App">
						<NavBar/>
						<div>
							<MiddleBox/>
						</div>
						<SessionsArea/>
					</div>
				)
			}
			// Cuando se entra a una sesión se pasa a la vista de juego
			else {
				return(
					<div>
						<NavBar/>
							<SessionView/>
					</div>
				)
			}
		}
		// Si no esta logueado se renderiza la vista de inicio
		else{
			return(
				<Welcome login = {this.login}/>
			)
		}
	}

  render() {
    return (
		this.renderBody()
    );
  }
}

export default App;

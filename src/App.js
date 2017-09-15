import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar.js';
import MiddleBox from './components/middleContent/MiddleBox.js';
import SessionsArea from './components/sessionsList/SessionsArea.js';
import Welcome from './components/welcomePage/Welcome.js';
import SessionView from './components/gameRoom/SessionView.js';

import store from './store';
import {login} from './actionCreators.js';

class App extends Component {

	constructor(){
		super();
		this.state = {
			playing: false,
			logged: false
		}

		// Se suscribe este estado al store global
		store.subscribe(() => {
			this.setState({
				playing: store.getState().playing,
				logged: store.getState().logged
			});
		});

		this.renderBody = this.renderBody.bind(this);
	}

	componentWillMount(){
		// Se consultan los datos locales de usuario
		var userData = JSON.parse(localStorage.getItem('userData'));
		if(userData != null){
			store.dispatch(login(true, userData));
		}
	}

	/**
	 * Renderiza el contenido de la vista principal
	 */
	renderBody(){
		// FIXME: arreglar para que se vean las sesiones en la vista movil
		const footerStyle = {
			backgroundColor: '#2C3E50',
			width: '100%',
			height: '100%',
			// position: 'fixed'
		}

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
						<div style = {footerStyle}>
							<SessionsArea/>
						</div>
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
				<Welcome/>
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

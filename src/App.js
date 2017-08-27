import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar.js';
import MiddleBox from './components/middleContent/MiddleBox.js';
import SessionsArea from './components/sessionsList/SessionsArea.js';
import Welcome from './components/welcomePage/Welcome.js';

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

	login(){
		this.setState({
			logged: true
		})
	}

	renderBody(){
		// Se renderiza la vista principal
		if(this.state.logged){
			if(!this.state.playing){
				return(
					<div className="App">
						<NavBar/>
						<MiddleBox/>
						<SessionsArea/>
					</div>
				)
			}
			// Se renderiza la vista de partida
			else {
				return(
					<div>

					</div>
				)
			}
		}
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

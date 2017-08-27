import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar.js';
import MiddleBox from './components/middleContent/MiddleBox.js';
import SessionsArea from './components/sessionsList/SessionsArea.js';

class App extends Component {

	renderBody(){

	}

  render() {
    return (
      <div className="App">
				<NavBar/>
	      <MiddleBox/>
	      <SessionsArea/>
      </div>
    );
  }
}

export default App;

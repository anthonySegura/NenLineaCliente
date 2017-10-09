import React, {Component} from 'react';
import NavItem from './NavItem.js';
import store from '../../store';
import {cerrarJuego, verPerfil, verRanking} from "../../actionCreators";

class NavBar extends Component{

	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
				<div className="container">
					<a className="navbar-brand js-scroll-trigger" href="#root" onClick={() => {
						store.dispatch(cerrarJuego());
					}}>N en Línea</a>
					<button className="navbar-toggler navbar-toggler-right"
					        type="button"
					        data-toggle="collapse"
					        data-target="#navbarResponsive"
					        aria-controls="navbarResponsive"
					        aria-expanded="false"
					        aria-label="Toggle navigation">
						Menu
						<i className="fa fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<NavItem name = "Ranking" onClick = {()=> {store.dispatch(verRanking())}}/>
							<NavItem name = "Perfil" onClick = {()=> {store.dispatch(verPerfil())}}/>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavBar;
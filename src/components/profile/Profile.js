import React, {Component} from 'react';
import store from '../../store';
import {cerrarSesion} from "../../actionCreators";
import {getUserScore} from "../../serverRequests";

class Profile extends Component{

	constructor(){
		super();
		this.state = {
			userRank: {}
		}
	}

	componentDidMount(){
		getUserScore(store.getState().user_info.nombre, (data) => {
			this.setState({
				userRank: data
			})
		});
	}

	render(){
		return(
			<header className= "perfil masthead">
				<div className= "text-center">
					<div className= "container">
						<div className= "col-sm-6 MyContainer">
							<div>
								 <h3>{store.getState().user_info.nombre}</h3>
								 <img className= "img-fluid" src={store.getState().user_info.imageUrl} alt = "Profile img"/>
								 <h3>Principiante</h3>
								 <h3>Puntos {this.state.userRank.score}</h3>
								 <button className= "btn btn-success"
								         onClick={()=> {store.dispatch(cerrarSesion())}}>
									       Cerrar Sesión
								 </button>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Profile;
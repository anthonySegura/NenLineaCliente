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

	setCategorie(){
		 switch (this.state.userRank.rank){
			 case 1:
			 	return 'Avanzado';
			 case 2:
			 	return 'Intermedio';
			 case 3:
			 	return 'Principiante';
		}

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
								 <h3>{this.setCategorie()}</h3>
								 <h3>{this.state.userRank.score}<i className="fa fa-star" style={{marginLeft: '2%'}}></i></h3>
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
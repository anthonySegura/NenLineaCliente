import React, {Component} from 'react';
import {getRanking} from "../../serverRequests";

class Ranking extends Component{

	constructor(){
		super();
		this.state = {
			ranking: []
		}
	}

	componentDidMount(){
		getRanking((data) => {
			this.setState({
				ranking: data.ranking
			});
		});
	}

	renderRanking(){
		return this.state.ranking.map(user => {
			console.log(user);
			return(
				<li key={user.id}>
					<div>
						<h6>{user.name}</h6>
						<h6 style={{marginLeft: '5px'}}>{user.puntuacion}<i className="fa fa-star"></i></h6>
					</div>
				</li>
			);
		});
	}

	render(){
		return(
			<header className= "ranking masthead">
				<div className= "text-center">
					<div className= "container">
						<div className= "col-sm-6 MyContainer">
							<h3>Ranking</h3>
							<ol className= "ranking-list">
								{this.renderRanking()}
							</ol>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Ranking;
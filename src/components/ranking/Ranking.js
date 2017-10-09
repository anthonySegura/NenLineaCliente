import React, {Component} from 'react';
import {getRanking} from "../../serverRequests";

class Ranking extends Component{

	componentWillMount(){
		getRanking();
	}

	render(){
		return(
			<div className="ranking" >

			</div>
		)
	}
}

export default Ranking;
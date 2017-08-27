import React, {Component} from 'react';

class NavItem extends Component{

	render(){
		return(
			<li className="nav-item">
				<a className="nav-link js-scroll-trigger" href="#root">{this.props.name}</a>
			</li>
		)
	}
}

export default NavItem;
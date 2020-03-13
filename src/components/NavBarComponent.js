import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler} from 'reactstrap';
import {NavLink} from 'react-router-dom'

class NavBarComponent extends Component {
	constructor(props){
		super(props);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			isNavOpen: false
		}
	}

	toggleNavbar(){
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar dark color="danger">
					<NavbarToggler className="mr-auto" onClick={this.toggleNavbar} navbar/>
					<NavbarBrand className="center" href="/">
						<img src = "images/download.png" alt = "download"/>
					</NavbarBrand>
					<Collapse isOpen ={this.state.isNavOpen} navbar>
						<Nav className="mr-auto" navbar >
							<NavItem className="mr-2">
								<NavLink className="nav-link" to = "/catagories"><span className="fa fa-info fa-lg"></span>Catagories</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div> 
		);
	}
}

export default NavBarComponent
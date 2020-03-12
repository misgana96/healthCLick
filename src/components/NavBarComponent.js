import React, { Component } from 'react';
import {Navbar, NavbarBrand, NavbarText, Nav, NavItem, Collapse, NavbarToggler} from 'reactstrap';
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
			<Navbar dark expand ="md" color="danger">
				<div className="container">
					<NavbarToggler onClick={this.toggleNavbar} navbar/>
					<NavbarBrand href="/">
						<img src = "images/download.png"/>
					</NavbarBrand>
					<Collapse isOpen ={this.state.isNavOpen} navbar>
						<Nav className="mr-auto" navbar >
							<NavItem>
								<NavLink className="nav-link" to = "/contactus"><span className="fa fa-address-book fa-lg"></span>Contact Us</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to = "/aboutus"><span className="fa fa-info fa-lg"></span>About Us</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div> 
			</Navbar>
		);
	}
}

export default NavBarComponent
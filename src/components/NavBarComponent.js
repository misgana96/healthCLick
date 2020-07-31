import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, Collapse, 
		NavbarToggler, Button, Modal, ModalHeader, ModalBody, 
		ModalFooter, Form, FormGroup, Label, Input, FormFeedback, FormText} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom'

class NavBarComponent extends Component {
	constructor(props){
		super(props);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.toogleSubscribe = this.toogleSubscribe.bind(this);
		this.state = {
			isNavOpen: false,
			isModalOpen: false
		}
	}

	toggleNavbar(){
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	toogleSubscribe(){
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar dark color="danger">
					<NavbarToggler className="mr-auto" onClick={this.toggleNavbar} navbar/>
					<Nav className="navbar navbar-light">
						<NavItem>
							<NavLink className="nav-link" to = "/home"><span className="fa fa-home fa-lg"></span>Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="nav-link" to = "/aboutus"><span className="fa fa-info fa-lg"></span>About Us</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className="nav-link" to = "/contactus"><span className="fa fa-address fa-lg"></span>Contact Us</NavLink>
						</NavItem>
						<NavItem>
							<Button color="danger" onClick={this.toogleSubscribe}>subscribe</Button>
							<Modal isOpen={this.state.isModalOpen} toggle={this.toogleSubscribe} className="">
								<ModalHeader toggle={this.toogleSubscribe}>Subscribe Here</ModalHeader>
								<ModalBody>
									<Form>
										<FormGroup>
											<Label for="email">Email</Label>
											<Input
												type ="email"
												name = "email"
												id= "Email"
												placeholder = "misganayoseph@gmail.com"
												/>
										</FormGroup>
									</Form>
								</ModalBody>
								<ModalFooter>
									<Button color="primary" onClick={this.toogleSubscribe}>Submit</Button>{' '}
									<Button color ="secondery" onClick={this.toogleSubscribe}>Cancel</Button>
								</ModalFooter>
							</Modal>
						</NavItem>
					</Nav>
					<NavbarBrand className="" href="/">
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
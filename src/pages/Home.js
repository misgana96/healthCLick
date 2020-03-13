import React from 'react'
import NavBarComponent from '../components/NavBarComponent'
import Footer from '../components/FooterComponent'
import Contact from '../components/ContactComponent'
import About from '../components/AboutComponent'
import {Switch, Route, Redirect} from 'react-router-dom'


function Home(props) {
	return(
		<>
		<NavBarComponent/>
		<Switch>
			<Route path = "/contactus" component = {Contact}/>
			<Route path = "/aboutus" component = {About}/>
			<Redirect to = "/home"/>
		</Switch>
		<Footer/>
		</>
	);
}

export default Home
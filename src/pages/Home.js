import React from 'react'
import NavBarComponent from '../components/NavBarComponent'
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
		</Switch>
		</>
	);
}

export default Home
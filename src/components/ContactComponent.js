import React from 'react'
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Media} from 'reactstrap'

function Contact(props) {
	return(
		<div className="container">
			<div className="row row-content">			
				<div className="col-12 col-sm-4 offset-2">
					<h3>Contact Information</h3>
					<i className="fa fa-phone fa-lg"></i>: +251916159060<br />
					<i className="fa fa-envelope-o fa-lg"></i>: <a color="secondary" href="mailto:">misganayoseph@gmail.com</a><br/>
					<i className="fa fa-fax fa-lg"></i>: +345466<br /> 
				</div>
				<div className="col-12 col-sm-4">
					<Media></Media>
				</div>
			</div>
		</div>
	);
}

export default Contact
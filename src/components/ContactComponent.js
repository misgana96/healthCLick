import React from 'react'
import {Media} from 'reactstrap'

function Contact(props) {
	return(
		<div className="container">
			<div className="row row-content">			
				<div className="col-12 col-sm-4">
					<h3>Contact Information</h3>
					<i className="fa fa-phone fa-lg"></i>: +251916159060<br />
					<i className="fa fa-envelope-o fa-lg"></i>: <a color="secondary" href="mailto:">misganayoseph@gmail.com</a><br/>
					<i className="fa fa-fax fa-lg"></i>: +345466<br /> 
				</div>
				<div className="col-12 col-sm-8">
					<Media>
						<Media left href="#">
        					<img src="images/face.jpg" alt="face" />
      					</Media>
      					<Media body>
      						<Media heading >Support Team</Media>
      						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      					</Media>
					</Media>
				</div>
			</div>
		</div>
	);
}

export default Contact
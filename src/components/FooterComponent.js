import React from 'react'
import {Link} from 'react-router-dom'


function Footer(props) {
	return(		
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-4 col-sm-2">
						<h5>Links</h5>
	                    <ul className="list-unstyled">
	                        <li><Link to="/home"><i className="fa fa-home fa-lg"></i> Home</Link></li>
	                        <li><Link to="/aboutus"><i className="fa fa-info fa-lg"></i> About Us</Link></li>
	                        <li><Link to="/menu"><i className="fa fa-list fa-lg"></i> Menu</Link></li>
	                        <li><Link to="/contactus"><i className="fa fa-address"></i> Contact Us</Link></li>
	                    </ul>
					</div>
					<div className="col-12 offset-6 col-sm-4 align-self-center">
						<div className="text-center">
	                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
	                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
	                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
	                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
	                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
	                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
	                    </div>
					</div>
				</div>
				<div className="row justify-content-center">             
	                <div className="col-auto">
	                    <p>© Copyright 2020 Health Click</p>
	                </div>
        		</div>
			</div>
		</div>
	);
}


export default Footer
import React from 'react'

function About(props) {
	return(
		<div className="container">
			<div className="row row-content">
				<div className="col-12 col-sm-5">
					<h3>Our Story</h3>
					<p>HealthClick is a home of health. We provide any health content from physical to psychological
					. we care for your health so that we bring each and every health content from different proffesionals.
					 </p>
				</div>
				<div className="col-12 col-sm-6 offset-1">
					<img src="images/blackDoc.png" alt = "blackDoc"/>
				</div>
			</div>
		</div>
		);
}

export default About
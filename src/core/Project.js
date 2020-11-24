import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from './apiCore';
import ShowImage from './ShowImage';

function Project() {

	const [Project, setProject] = useState([]);
	const [projectsByArrival, setProjectsByArrival] = useState([]);
	const [error, setError] = useState(false);
  
	
	const loadProjectsByArrival = () => {
	  getProjects('createdAt').then(data => {
		console.log(data);
		if (data.error) {
		  setError(data.error);
		} else {
		  setProjectsByArrival(data);
		}
	  });
	};
  
	useEffect(() => {
	  loadProjectsByArrival();
   
	}, []);
  
	const renderCardByArrival = projectsByArrival.map((project, index) => {
	  return <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" key={index}>
  						<a href={`${project.link}`} target='_black'>
						 
							<div className="card-flyer">
								<div className="text-box">
									<div className="image-box">
									<ShowImage item={project} url='project' />
									</div>
									<div className="text-container">
										<h6>{project.name}</h6>
										<p>{project.description.substring(0, 100)}</p>
									</div>
								</div>
							</div>
						</a>
	  </div>
	})
  
    return (
        <div id='project' className="project_section">
	
	<div id="cards_landscape_wrap-2">
    <div className=" site-headings pt-5">
                <h2>Our <span>Projects</span></h2>
					<h4 className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</h4>
				</div>
			<div className="container ">
				<div className="row">
			{renderCardByArrival }
				</div>
				<Link to='/projects'>
			<div className="vButton">
  <div className="button__text animated bounceInRight" style={{animationDelay: '1s'}}>View more...</div>
  
  <div className="button__wrapper">
    <div className="button__arrow"></div>
    <div className="button__border-circle"></div>
    <div className="button__mask-circle">
      <div className="button__small-circle"></div>
    </div>
  </div>
</div>
</Link>

			</div>
		</div>
</div>
    )
}

export default Project

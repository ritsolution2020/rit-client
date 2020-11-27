import React from 'react';
import p1 from "../img/web.JPG";
import p2 from "../img/ruku.jpg";

function Team() {
    return (
      <div>
          
<section id="team" className="team-area">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="site-heading text-center">
							<h2>Our <span>Team</span></h2>
							<h4>Meet our awesome and expert team members</h4>
						</div>
					</div>
				</div>
					<div className="row team-items ">
						<div className="col-lg-5 col-md-5 col-sm-12 single-item m-auto">
							<div className="item">
								<div className="thumb">
									<img className="img-fluid" src={p2} alt="Thumb" />
									<div className="overlay">
										
									
									</div>
								</div>
								<div className="info">
									<span className="message">
										<a href="#"><i className="fas fa-envelope-open"></i></a>
									</span>
									<h5>RUKUNDO Olivier </h5>
									<span>CO-FOUNDER/CEO</span>
								</div>
							</div>
						</div>
						<div className="col-lg-5 col-md-5 col-sm-12 single-item m-auto">
							<div className="item">
								<div className="thumb">
									<img className="img-fluid" src={p1} alt="Thumb" />
									<div className="overlay">
									
								
									</div>
								</div>
								<div className="info">
									<span className="message">
										<a href="#"><i className="fas fa-envelope-open"></i></a>
									</span>
									<h5>Jean Luc RURANGWA</h5>
									<span>Full-Stack Web Developer</span>
								</div>
							</div>
						</div>
					
					</div>
			</div>
		</section>
        </div> 
    )
}

export default Team

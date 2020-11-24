import React from 'react';
import p1 from "../img/40.jpg";
import p2 from "../img/2.jpg";

function Team() {
    return (
      <div>
          
<section id="team" class="team-area">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="site-heading text-center">
							<h2>Our <span>Team</span></h2>
							<h4>Meet our awesome and expert team members</h4>
						</div>
					</div>
				</div>
					<div class="row team-items">
						<div class="col-md-6 col-sm-12 single-item">
							<div class="item">
								<div class="thumb">
									<img class="img-fluid" src={p2} alt="Thumb" />
									<div class="overlay">
										
										
										<div class="social">
											<ul>
												<li class="twitter">
													<a href="#"><i class="fab fa-twitter"></i></a>
												</li>
												<li class="facebook">
													<a href="#"><i class="fab fa-facebook"></i></a>
												</li>
												<li class="instagram">
													<a href="#"><i class="fab fa-instagram"></i></a>
												</li>
												<li class="whatsapp">
													<a href="#"><i class="fab fa-whatsapp"></i></a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="info">
									<span class="message">
										<a href="#"><i class="fas fa-envelope-open"></i></a>
									</span>
									
									<span>Project Manager</span>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-sm-12 single-item">
							<div class="item">
								<div class="thumb">
									<img class="img-fluid" src={p1} alt="Thumb" />
									<div class="overlay">
									
										<div class="social">
											<ul>
												<li class="twitter">
													<a href="#"><i class="fab fa-twitter"></i></a>
												</li>
												<li class="facebook">
													<a href="#"><i class="fab fa-facebook"></i></a>
												</li>
												<li class="instagram">
													<a href="#"><i class="fab fa-instagram"></i></a>
												</li>
												<li class="whatsapp">
													<a href="#"><i class="fab fa-whatsapp"></i></a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="info">
									<span class="message">
										<a href="#"><i class="fas fa-envelope-open"></i></a>
									</span>
									
									<span>App Developer</span>
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

import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import About from './About';
import Services from './Services';
import Project from './Project';
import Team from './Team';
import Contact from './Contact';
import carsl1 from "../img/carousel/3.jpg";
import carsl2 from "../img/carousel/2.jpg";
import carsl3 from "../img/carousel/1.jpg";

const Home = () => {

  
  return (
    <div>
   
      <Menu />
      <div id="carousel" className="carousel slide" data-ride="carousel" 
	   data-interval="6500">
		   
		
		<div className="carousel-inner">

			<div className="carousel-item active ">
				<img src={carsl3} alt="" className="w-100 overlayText" />
				<div className="carousel-caption">
                        <h2 className="animated bounceInRight textFont" style={{animationDelay: '1s'}}>We Are <span>Creative</span></h2>
                        <h3 className="animated bounceInLeft textFont" style={{animationDelay: '2s'}}>Web Design and Development Agency</h3>
                        <p className="animated bounceInRight " style={{animationDelay: '3s'}}><a href="#" className="btn btnPrimary">Contact us</a></p>
                    </div>
			
			</div>
			<div className="carousel-item">
				<img  src={carsl2} alt="" className="w-100 overlayText" />
				<div className="carousel-caption">
                        <h2 className="animated slideInDown textFont" style={{animationDelay: '1s'}}>We Are <span>RIT</span></h2>
                        <h3 className="animated fadeInUp textFont" style={{animationDelay: '2s'}}>Web Design and Development Agency</h3>
                        <p className="animated zoomIn " style={{animationDelay: '3s'}}><a href="#" className="btn btnPrimary">Contact us</a></p>
                    </div>
			</div>
			<div className="carousel-item ">
				
				<img src={carsl1} alt="" className="w-100 overlayText" />
				<div className="carousel-caption">
                        <h2 className="animated zoomIn  textFont" style={{animationDelay: '1s'}}>We Are <span>Diligent</span></h2>
                        <h3 className="animated fadeInLeft textFont" style={{animationDelay: '2s'}}>Web Design and Development Agency</h3>
                        <p className="animated zoomIn " style={{animationDelay: '3s'}}><a href="#" className="btn btnPrimary">Contact us</a></p>
                    </div>
			</div>

		</div>

	
		<a href="#carousel" className="carousel-control-prev" role="button" data-slide="prev">
			<i className="fas fa-chevron-left fa-2x"></i>
		</a>
		<a href="#carousel" className="carousel-control-next" role="button" data-slide="next">
			<i className="fas fa-chevron-right fa-2x"></i>
		</a>
		
	</div>
  <About />
  <Services />
  <Project />
  <Team />
  <Contact />
 
 
    </div>
  );
};

export default Home;
import React from 'react'

function Contact() {
    return (
        
<div id='contact' className='container text-center'>
	<div className="col-md-10 col-lg-8 m-auto">
<div class="site-heading mb-0">
                <h2> <span>Contact</span> Us</h2>
					
				</div>
				</div>
        <div id="container">
            
		<span className="big-circle"></span>
		<img src="img/shape.png" className="square" alt="" />
		<div className="form">
		  <div className="contact-info">
			<h3 className="title">Let's get in touch</h3>
			<p className="text">
			To reach us please feel free to contact us on the address bellow:
			</p>
  
			<div className="info">
			  <div className="information">
				<img src="img/location.png" className="icon" alt="" />
	<p><i className="fas fa-map-marker-alt"></i>{' '}Muhima/Kigali</p>
			  </div>
			  <div className="information">
				<img src="img/email.png" className="icon" alt="" />
	<p><i className="fas fa-envelope"></i>{' ' }ritrwaanda@gmail.com</p>
			  </div>
			  <div className="information">
				<img src="img/phone.png" className="icon" alt="" />
				<p><i className="fas fa-phone"></i>{' '}+250788941714</p>
			  </div>
			</div>
  
			<div className="social-media">
			  <p>Connect with us :</p>
			  <div className="social-icons">
				<a href="#">
				  <i className="fab fa-facebook-f" target='_blank'></i>
				</a>
				<a href="#">
				  <i className="fab fa-twitter" target='_blank'></i>
				</a>
				<a href="https://www.instagram.com/rit_rw/" target='_blank'>
				  <i className="fab fa-instagram"></i>
				</a>
				<a href="#" target='_blank'>
				  <i className="fab fa-linkedin-in"></i>
				</a>
			  </div>
			</div>
		  </div>
  
		  <div className="contact-form">
			<span className="circle one"></span>
			<span className="circle two"></span>
  
			<form method="POST" action="https://formspree.io/ritrwaanda@gmail.com" role="form" autocomplete="off">
			  <h3 className="title">Contact us</h3>
			  <div className="input-container">
				<input type="text" name="name" className="input" placeholder="Name" required />
				
			  </div>
			  <div className="input-container">
				<input type="email" name="email" className="input" placeholder="Email"  required />
			
			  </div>
			  <div className="input-container">
				<input type="tel" type="subject" className="input" placeholder="Subject" required />
				
			  </div>
			  <div className="input-container textarea">
				<textarea name="message" placeholder="Message" className="input"></textarea>
			
			  </div>
			  <input type="submit" value="Send"  className="btttn border" />
			</form>
		  </div>
		</div>
	  </div>
	  
	  </div>
    )
}

export default Contact

import React from 'react'

function Contact() {
    return (
        
<div id='contact' className='container text-center'>
<div class="site-heading">
                <h2> <span>Contact</span> Us</h2>
					<h4 class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</h4>
				</div>

        <div id="container">
            
		<span className="big-circle"></span>
		<img src="img/shape.png" className="square" alt="" />
		<div className="form">
		  <div className="contact-info">
			<h3 className="title">Let's get in touch</h3>
			<p className="text">
			  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
			  dolorum adipisci recusandae praesentium dicta!
			</p>
  
			<div className="info">
			  <div className="information">
				<img src="img/location.png" className="icon" alt="" />
				<p>92 Kigali, NY 11 553</p>
			  </div>
			  <div className="information">
				<img src="img/email.png" className="icon" alt="" />
				<p>lorem@ipsum.com</p>
			  </div>
			  <div className="information">
				<img src="img/phone.png" className="icon" alt="" />
				<p>+250788941714</p>
			  </div>
			</div>
  
			<div className="social-media">
			  <p>Connect with us :</p>
			  <div className="social-icons">
				<a href="#">
				  <i className="fab fa-facebook-f"></i>
				</a>
				<a href="#">
				  <i className="fab fa-twitter"></i>
				</a>
				<a href="#">
				  <i className="fab fa-instagram"></i>
				</a>
				<a href="#">
				  <i className="fab fa-linkedin-in"></i>
				</a>
			  </div>
			</div>
		  </div>
  
		  <div className="contact-form">
			<span className="circle one"></span>
			<span className="circle two"></span>
  
			<form action="index.html" autocomplete="off">
			  <h3 className="title">Contact us</h3>
			  <div className="input-container">
				<input type="text" name="name" className="input" placeholder="Name" required />
				
			  </div>
			  <div className="input-container">
				<input type="email" name="email" className="input" placeholder="Email"  required />
			
			  </div>
			  <div className="input-container">
				<input type="tel" name="phone" className="input" placeholder="Phone" required />
				
			  </div>
			  <div className="input-container textarea">
				<textarea name="message" placeholder="Message" className="input"></textarea>
			
			  </div>
			  <input type="submit" value="Send"  className="btn" />
			</form>
		  </div>
		</div>
	  </div>
	  
	  </div>
    )
}

export default Contact

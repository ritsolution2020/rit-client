import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import logo from '../img/logo.png'


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#000" };
    }
};

const Menu = ({ history }) =>{ 
    const scrollToTop = () => {
        // window.location.reload(false);
        window.scrollTo({top:0, behavior: 'smooth'});
       
      } 
    return(

 
    
     <div >
  <div className="top-bar">
	   <div className="container">
		   <div className="col-md-12 col-sm-3 text-right">
			   <p>
			
				<a href="https://wa.me/message/" target="_blank" 
				title="Contact Us"><i className="fab fa-whatsapp "></i><span className="pl-1">+250788941714</span></a>
			</p>
		   </div>
	   </div>
   </div>
   <nav className="navbar bg-light navbar-light navbar-expand-lg">
   <div className="container">
			<a href="index.html" className="navbar-brand">
				
				<img src={logo} alt="Logo" title="Logo" />
			</a>

			<button className="navbar-toggler" type="button" data-toggle="collapse"
			 data-target="#navbarResponsive">
				<span className="navbar-toggler-icon "></span>
		</button>
    
		<div className="collapse navbar-collapse" id="navbarResponsive">
			<ul className="navbar-nav ml-auto">
					<li className="nav-item  m-auto "><a href="/" className="nav-link active">Home</a></li>
				<li className="nav-item  m-auto "><a href="#about" className="nav-link">About</a></li>
				<li className="nav-item  m-auto "><a href="#services" className="nav-link">Services</a></li>
				<li className="nav-item  m-auto "><a href="#project"className="nav-link">Projects</a></li>
				<li className="nav-item  m-auto "><a href="#team"className="nav-link">Team</a></li>
				<li className="nav-item  m-auto "><a href="#contact" className="nav-link">Contact</a></li>
                        
                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item  m-auto ">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/user/dashboard")}
                            to="/user/dashboard"
                        >
                            Dashboard
                    </Link>
                    </li>
                )}

                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-item  m-auto ">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/admin/dashboard")}
                            to="/admin/dashboard"
                        >
                            Dashboard
                    </Link>
                    </li>
                )}

                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item  m-auto ">
                         <Link
                                className="nav-link"
                                style={isActive(history, "/signin")}
                                to="/signin"
                            >
                                Login
                        </Link>
                        </li>

                        <li className="nav-item  m-auto ">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/signup")}
                                to="/signup"
                            >
                                Register
                        </Link>
                        </li>
                    </Fragment>
                )}

                {isAuthenticated() && (
                    <li className="nav-item m-auto ">
                        <span
                            className="nav-link text-dark mb-2"
                            style={{ cursor: "pointer", color: "#ffffff" }}
                            onClick={() =>
                                signout(() => {
                                    history.push("/");
                                })
                            }
                        >
                            Logout
                    </span>
                    </li>
                )}
                    </ul>
                </div>
            </div>
        </nav>

        <Link className="gotopbtn" onClick={scrollToTop()} > 
  <i className="fas fa-arrow-up"></i> </Link>
    </div>
)};

export default withRouter(Menu);
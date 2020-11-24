import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import Menu from "../core/Menu";

const Dashboard = () => {
    const [history, setHistory] = useState([]);

    const {
        user: { _id, name, email, role }
    } = isAuthenticated();
    const token = isAuthenticated().token;


    



    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item font-weight-bold">{name}</li>
                    <li className="list-group-item font-italic">{email}</li>
                    <li className="list-group-item">
                        {role === 1 ? "Admin" : "Registered User"}
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link text-warning" to={`/profile/${_id}`}>
                            Update Profile
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

  

    return (
        <div>
<Menu/>
        <div className="container mt-5">
            <div className="row">
        
                <div className="col-md-6"> {userInfo()}</div>
         
                    
                
            </div>
        </div>
        </div>
    );
};

export default Dashboard; 
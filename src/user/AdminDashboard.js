import React from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();

    const adminLinks = () => {
        return (
            <div className="container">
                 <div className="middle   ">
              
                  <Link className="btns btn3 text-decoration-none" to="/create/category">
                            Create Category
                        </Link>
                        <Link className="btns btn2 text-decoration-none" to="/create/project">
                            Create Project
                        </Link>
                        <Link className="btns btn1 text-decoration-none" to="/admin/projects">
                            Manage Projects
                        </Link>
               
                  </div>
            </div>
        );
    };

    const adminInfo = () => {
        return (
            <div className="card mb-5 ">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item font-weight-bold">{name}</li>
                    <li className="list-group-item font-italic">{email}</li>
                    <li className="list-group-item">
                        {role === 1 ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <div>
        <div
            className="container mt-5"
            >
               <div class="button_cont"><a href='/' className="BackHome" >
            <i class="fas fa-angle-double-left"></i>   Back To Home </a>
                
                </div>
            <div className="">
                <div className="">{adminLinks()}</div>
          
            </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
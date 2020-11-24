import React from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    const {
        user: { _id, name, email, role }
    } = isAuthenticated();

    const adminLinks = () => {
        return (
            <div className="card border-0">
              
                <ul className="list-group m-auto">
                    <li className="list-group-item">
                        <Link className="nav-link text-danger" to="/create/category">
                            Create Category
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link text-danger" to="/create/project">
                            Create Project
                        </Link>
                    </li>
               
                    <li className="list-group-item">
                        <Link className="nav-link text-danger" to="/admin/projects">
                            Manage Projects
                        </Link>
                    </li>
                </ul>
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
               <div class="button_cont"><a href='/' className="BackHome" >
            <i class="fas fa-angle-double-left"></i>   Back To Home </a>
                
                </div>
        <div
            className="container mt-5"
            >
            <div className="row">
                <div className="col-md-6 mb-4">{adminLinks()}</div>
          
            </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
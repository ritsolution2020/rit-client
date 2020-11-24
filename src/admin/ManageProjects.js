import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProjects, deleteProject } from "./apiAdmin";

const ManageProjects = () => {
  
    const [projects, setProjects] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProjects = () => {
        getProjects().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProjects(data);
            }
        });
    };

    const destroy = projectId => {
        deleteProject(projectId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProjects();
            }
        });
    };

    useEffect(() => {
        loadProjects();
    }, []);

    return (
        <div>
             <div class="button_cont"><a href="/admin/dashboard" className="BackHome" >
            <i class="fas fa-angle-double-left"></i>  Back to Dashboard </a>
                
                </div>
            <div className="row">
                <div className="col-md-9 m-auto">
                    <h2 className="text-center">
                        Total {projects.length} projects
                    </h2>
                    <hr />
                    <ul className="list-group">
                        {projects.map((p, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <strong>{p.name}</strong>
                                <Link to={`/admin/project/update/${p._id}`}>
                                    <span className="badge badge-warning badge-pill">
                                        Update
                                    </span>
                                </Link>
                                <span
                                style={{cursor: 'pointer'}}
                                    onClick={() => destroy(p._id)}
                                    className="badge badge-danger badge-pill"
                                >
                                    Delete
                                </span>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default ManageProjects;
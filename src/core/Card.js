import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem } from './cartHelpers';

const Card = ({ project,
  showViewProjectButton = true,
}) => {


  const showViewButton = showViewProjectButton => {
    return (
      showViewProjectButton && (
        <a href={`${project.link}`} className="mr-2">
          <button id='bt' className="btn btn-outline-success mt-2 mb-2 card-btn-1">View Project</button>
        </a>
      )
    );
  };
  return (
 <div>
     <a href={`${project.link}`} target='_black' className=" mb-3 text-decoration-none text-dark">
    

    <div className="face front border">


      <div className="view overlay">

              <ShowImage className="card-img-top" item={project} url='project' />
     
      </div>


      <div className="card-body text-center">

      
        <h4 className=""> {project.name}</h4>
        <p className="card-text ">{project.description.substring(0, 100)}</p>
      
      </div>

    </div>
    
    </a>
 </div>

  );
};

export default Card;
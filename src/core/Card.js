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
 <div className="containers">
     
    <div className="post-wrap"> 
            <div className="post-card">
                <div className="post-front">
                    <div className="post-img">
                    <ShowImage className="card-img-top" item={project} url='project' />
                    </div>
                    
                   
                </div>
                <div className="post-back">
                    <div className="post-except">
                        <h2>{project.name}</h2>
                        <p className='mb-4'>
                        {project.description.substring(0, 300)}
                        </p>
                    <a className=' text-decoration-none' href={`${project.link}`} target='_black'>View Website</a>
                    </div>
                </div>
            </div>
        </div>
 </div>

  );
};

export default Card;
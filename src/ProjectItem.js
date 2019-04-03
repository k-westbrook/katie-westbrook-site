import React from 'react';
import './App.css';



export const ProjectItem = (props) => {
  const { name, imageURL, description, link } = props.project;
  console.log(link)
  return (
    <div>
      <a href={link}>
        <div className='project-card'>
          <div className='project-info'>
            <h3>{name}</h3>
            <img src={imageURL} alt='project' className='project-img' />
            <p>{description}</p>


          </div>
        </div>
      </a>
    </div>
  );
}




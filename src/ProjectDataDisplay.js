import React from 'react';
import './userdata.css';

export default function ProjectListDisplay(props){

    return (
        <div className="project-container">
        <h2>{props.name}</h2>
        <h4>{props.description}</h4>
        <h4>Tech Stack : {props.tech}</h4>  
        <h5> <a href={props.github}>Github: {props.github} </a> </h5> 
        </div>    
    );
  };
  
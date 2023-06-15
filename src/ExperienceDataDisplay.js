
import './userdata.css';
import React from 'react';

export default function ExperienceListDisplay(props){

  return (
      <div className="volunteer-container">
      <h2>{props.name}</h2>
      <h3> {props.organization}</h3>
      <h3> {props.tenure}</h3>
      <h4> {props.desc}</h4>
      </div>    
  );
};


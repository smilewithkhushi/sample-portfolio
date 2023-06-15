
import './userdata.css';
import React from 'react';

export default function EducationListDisplay(props){

  return (
      <div className="education-container">
      <h2>{props.name}</h2>
      <h3>Institution : {props.institute}</h3>
      <h3>Grade : {props.grade}</h3>
      <h4>Year : {props.year}</h4>
      </div>    
  );
};


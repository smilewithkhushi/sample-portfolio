
import './userdata.css';
import React from 'react';

export default function ExperienceListDisplay(props) {

  return (
    <div className="experience-container">
      <h6>
        <img src={props.image} alt={props.position} className="mainPic" />
      </h6>
      <h2>{props.name}</h2>
      <h3> {props.organization}</h3>
      <h3> {props.tenure}</h3>
      <h4> {props.desc}</h4>
    </div>
  );
};


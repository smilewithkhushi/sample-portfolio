import React from 'react';
import './userdata.css';

export default function VolunteeringListDisplay(props) {

    return (
        <div className="volunteer-container">

            <h6>
                <img src={props.image} alt={props.position} className="mainPic" />
            </h6>

            <h2>{props.name}</h2>

            <h3> {props.position}</h3>

            <h4>{props.description}</h4>

        </div>
    );
};

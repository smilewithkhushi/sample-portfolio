import React from 'react';
import './userdata.css';

export default function CertificationListDisplay(props) {

    return (
        <div className="certification-container">

            <h6>
                <img src={props.image} alt={props.position} className="mainPic" />
            </h6>

            <h2>{props.name}</h2>

            <h3> {props.organization}</h3>

            <h4>{props.date}</h4>

        </div>
    );
};


import './userdata.css';
import React from 'react';

const educationListDisplay = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((item) => (
        
        <div>
            <h1> {item.name} </h1>
            <h2> Institute : {item.institute} </h2>
            <h3> Grade : {item.grade} </h3>
            <h4> Year : {item.year} </h4>            
        </div>
      ))}
    </div>
  );
};

export default educationListDisplay;

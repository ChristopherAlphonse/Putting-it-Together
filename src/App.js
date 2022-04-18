import React from 'react';
import './style.css';


const App = (props) => {
  return (
    <div className="App">
      <h1> {props.name}</h1>
      <p> {props.age} </p>
      <p> {props.desc}</p>
      <button className="btn">{props.birth}</button>
    </div>
  );
};

const Section = () => {
  return (
    <>
      <App
        name=" Doe, Jane"
        age="Age: 45"
        desc="hair Color: Black"
        birth="Birthday Button for Jane Doe "
      />
      <App
        name=" Smith, John"
        age="Age: 80"
        desc="hair Color: Brown"
        birth="Birthday Button for John Smith "
      />
    </>
  );
};

export default Section;

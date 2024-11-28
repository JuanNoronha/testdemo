import React from 'react';
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <div style={{ height: props.galleryStyle }} className="gallery">
        {/* Display the job image */}
        <img
          src={`images/` + props.src}
          style={{ height: props.imageStyle }}
          alt={props.title}
          width="250"
          height="250"
        />
        <div className="desc">
          {/* Display the job title */}
          <h4>{props.title}</h4>

          {/* Display job skills and salary */}
          <div className="job-details">
            <p><strong>Required Skills:</strong> {props.skills}</p>
            <p><strong>Salary:</strong> {props.salary}</p>
          </div>

          {/* Apply button */}
          <button className="add">{props.buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

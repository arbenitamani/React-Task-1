import React from "react";
import './styles.css';

const TheItem = (props) => {
  const { image, name, id, description } = props;

  return (
    <div className="employee-card">
      <div className="image-container">{image}</div>
      <div className="text-container">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TheItem;

import React from "react";
import "../App.css";
import TheItem from "./Article";
import "../styles.css";
import PersonVec from "../components/personVec";


const items = [
  {
    id: "1",
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",  
    buttonLabel: 'New',
    image: <PersonVec />, 
    description: "File system changed fromDokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability impovements Share permissions re-design and optimization",
   
  },
  {
    id: "2", 
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",
    buttonLabel: 'Fix',
    image: <PersonVec />, 
    description: "Introducing Host Cloud Drive - virtual drive functionality \n New Share options and management New, more user friendly design Sync optimizations Various performance improvements and bug fixes ",
  },
  {
      id: "3",
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",   
    buttonLabel: 'Improvement',
    image: <PersonVec />, 
    description: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
  },
  {
     id: "4",
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",
    buttonLabel: 'New',
    image: <PersonVec />, 
    description: "File system changed fromDokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability impovements Share permissions re-design and optimization",
  },
  {
    id: "5",
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",
    buttonLabel: 'Fix',
    image: <PersonVec />, 
    description: "Introducing Host Cloud Drive - virtual drive functionality \n New Share options and management New, more user friendly design Sync optimizations Various performance improvements and bug fixes ",
  },
  {
    id: "6",
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",
    buttonLabel: 'Improvement',
    image: <PersonVec />, 
    description: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
  },
  {
     id: "7",
     version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",
    buttonLabel: 'New',
    image: <PersonVec />, 
    description: "File system changed fromDokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability impovements Share permissions re-design and optimization",
  },
  {
    id: "8",
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",
    buttonLabel: 'Fix',
    image: <PersonVec />, 
    description: "Introducing Host Cloud Drive - virtual drive functionality \n New Share options and management New, more user friendly design Sync optimizations Various performance improvements and bug fixes ",
  },
  { 
     id: "9", 
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe", 
    buttonLabel: 'Improvement',
    image: <PersonVec />, 
    description: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
  }
];

const getColorForText = (text) => {
  switch (text) {
    case "New":
      return "light-green";
    case "Fix":
      return "blue";
    case "Improvement":
      return "violet";
    default:
      return "black"; 
  }
};


const ArticlePage = () => {
  return (
    <div className="article-item-container">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <div className="item-header">
            <div className="item-version">{item.version}</div>
            <div className="item-date">{item.date}</div>
          </div>
          
          <div className="item-content">
          <button
              className="new-button"
              style={{ backgroundColor: getColorForText(item.buttonLabel) }}
            >
              {item.buttonLabel}
            </button>
            <div className="name-picture"> 
            {item.image}
            <p>{item.name}</p>
            </div>
           
            </div>
            <div className="item-details">
              
              <p>{item.description}</p>
              
            </div>
            <button className="download-button">Download</button> 
          </div>
       
      ))}
    </div>
  );
};

export default ArticlePage;
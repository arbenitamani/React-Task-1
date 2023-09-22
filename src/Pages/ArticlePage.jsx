import React from "react";
import "../App.css";
import TheItem from "./Article";
import "../styles.css";


const items = [
  {
    id: "1",
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",

    description: "File system changed fromDokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability impovements Share permissions re-design and optimization",
  },
  {
    id: "2", 
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",
    image: <img src={require('../images/person')} alt="" />,
    description: "Introducing Host Cloud Drive - virtual drive functionality \n New Share options and management New, more user friendly design Sync optimizations Various performance improvements and bug fixes ",
  },
  {
      id: "3",
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",   
    description: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
  },
  {
     id: "4",
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",
    description: "File system changed fromDokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability impovements Share permissions re-design and optimization",
  },
  {
    id: "5",
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",
    
    description: "Introducing Host Cloud Drive - virtual drive functionality \n New Share options and management New, more user friendly design Sync optimizations Various performance improvements and bug fixes ",
  },
  {
    id: "6",
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",
    
    description: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
  },
  {
     id: "7",
     version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",
   
    description: "File system changed fromDokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability impovements Share permissions re-design and optimization",
  },
  {
    id: "8",
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe",
    description: "Introducing Host Cloud Drive - virtual drive functionality \n New Share options and management New, more user friendly design Sync optimizations Various performance improvements and bug fixes ",
  },
  { 
     id: "9", 
    version: "3.3.0",
    date: "(14/05/2018)",
    name: "Kevin Joe", 
    description: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
  }
];

const ArticlePage = () => {
  return (
    <div className="article-item-container">
      {items.map((item) => (
        <TheItem
          key={item.id}
          version ={item.version}
          date= {item.date}
          name={item.name}
          id={item.id}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ArticlePage;
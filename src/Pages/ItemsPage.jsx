import React from "react";
import "../App.css";
import TheItem from "./TheItem.jsx";
import "../styles.css";
import Vec1 from "../components/vec1"; 
import Vec2 from "../components/vec2";
import Vec3 from "../components/vec3";
import Vec4 from "../components/vec4";
import Vec5 from "../components/vec5";
import Vec6 from "../components/vec6";
import Vec7 from "../components/vec7";
import Vec8 from "../components/vec8";
import Vec9 from "../components/vec9";

const items = [
  {
    name: "TDL",
    id: "1",
    image: <Vec1 />, 
    description: "Does the domain extension match the language of the domain name?",
  },
  {
    name: "Domain Length",
    id: "2",
    image: <Vec2 />, 
    description: "Is the domain short enough to remember?",
  },
  {
    name: "Language",
    id: "3",
    image: <Vec3 />, 
    description: "How complex is the actual domain name?",
  },
  {
    name: "International Recognition",
    id: "4",
    image: <Vec4 />, 
    description: "Can the domain name be used in an international scale?",
  },
  {
    name: "Search Engine",
    id: "5",
    image: <Vec5 />, 
    description: "Does the domain follow search engines guidelines?",
  },
  {
    name: "Advertising Potential",
    id: "6",
    image: <Vec6 />, 
    description: "Could the domain be used for advertising campains?",
  },
  {
    name: "Sales Opportunities",
    id: "7",
    image: <Vec7 />, 
    description: "Can the domain be used on an international scale?",
  },
  {
    name: "Typo susceptibility",
    id: "8",
    image: <Vec8 />, 
    description: "How high is the risk of mistyping the domain name?",
  },
  {
    name: "Bussiness Potential",
    id: "9",
    image: <Vec9 />, 
    description: "Can your domain be used as your company address?",
  }
];

const ItemsPage = () => {
  return (
    <div className="item-container">
      {items.map((item) => (
        <TheItem
          key={item.id}
          name={item.name}
          id={item.id}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ItemsPage;
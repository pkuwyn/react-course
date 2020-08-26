import React from "react";
import Card from "./card";

const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} key={monster.id}></Card>
      ))}
    </div>
  );
};

export default CardList;

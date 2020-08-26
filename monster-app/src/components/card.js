import React from "react";

const Card = (props) => {
  const { name, id, email } = props.monster;
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt=""
        className="card__image"
      />
      <h2 className="card__title">{name}</h2>
      <p className="card__email">{email}</p>
    </div>
  );
};

export default Card;

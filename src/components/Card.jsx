import React from "react";

const Card = ({ name, phone, email, image }) => {
  return (
    <div className="Card">
      <h1 className="name">{name}</h1>
      <p>{phone}</p>
      <p>{email}</p>
      <div className="circle">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Card;

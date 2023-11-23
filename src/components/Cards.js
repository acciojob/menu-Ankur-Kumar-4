import React from "react";
import All from "./All";

const Cards = (props) => {

  console.log(props.data);

  const filterData = props.data;

  return (
    <div className="card-container">
      {filterData.map((item) => (
        <div key={item.id} className="card">
          <img src={item.img} alt="" />

          <div className="card_detail">
            <span className="title">{item.title}</span>

            <span className="price">$ {item.price}</span>

            <div className="hr"></div>

            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

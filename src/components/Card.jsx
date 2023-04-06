import React from "react";
import Avatar from "./Avataer";
import Detail from "./Detail";
function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Detail detail={props.tel} />
          <Detail detail={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;

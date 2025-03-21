import React from "react";
import { Link } from "react-router-dom";

const VanDetail = ({ van }) => {
  return (
    <Link to={`/vans/${van.id}`}>
      <div className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  );
};

export default VanDetail;

import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const VanDetail = ({ van }) => {
  const params = useParams();
  console.log(params);

  return (
    <div className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  );
};

export default VanDetail;

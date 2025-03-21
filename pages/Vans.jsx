import React, { useEffect, useState } from "react";
import VanDetail from "./VanDetail";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const getVansList = async () => {
      const response = await fetch("/api/vans");
      const data = await response.json();
      console.log(data.vans);
      
      setVans(data.vans);
    };
    getVansList();
  }, []);

  const vanElements = vans.map((van) => (
    <VanDetail key={van.id} van={van} />
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>

      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;

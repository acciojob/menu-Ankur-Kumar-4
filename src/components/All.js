import React, { useState } from "react";
import Cards from "./Cards";

const All = (props) => {
  const [filteredData, setFilteredData] = useState(props.data);
  const [highlightLinks,sethighlightLink] = useState("all") 

  const filterAll = () => {
    setFilteredData(props.data);
    highlight("all");
  };

  const filterByCategory = (category) => {
    const filterData = props.data.filter((item) => item.category === category);
    setFilteredData(filterData);

  };

  const filterBreakfast = (e) => {
    filterByCategory("breakfast");
    highlight("breakfast");
    
  };

  const filterLunch = () => {
    filterByCategory("lunch");
    highlight("lunch");
  };

  const filterShakes = () => {
    filterByCategory("shakes");
    highlight("shakes");
  };

  const highlight=(category)=>{
    sethighlightLink(category)
  }

  


  return (

    <div className="main">
      <h1>Our Menu</h1>
      <div className="highlight"></div>

      <div>
        <ul className="links">
          <li className={highlightLinks==="all" && "hg"} onClick={filterAll}>All</li>
          <li id="#filter-btn-1" className={highlightLinks==="breakfast" && "hg"} onClick={filterBreakfast}>Breakfast</li>
          <li id="filter-btn-2" className={highlightLinks==="lunch" && "hg"} onClick={filterLunch}>Lunch</li>
          <li id="#filter-btn-1" className={highlightLinks==="shakes" && "hg"} onClick={filterShakes}>Shakes</li>
        </ul>
      </div>

      <Cards data={filteredData} />

    </div>

  );
};

export default All;

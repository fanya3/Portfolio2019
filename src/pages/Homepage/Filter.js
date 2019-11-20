import React from "react";
import { FILTERS } from "../../non-components/Filters.js";


const Filter = (props) => {

  const card = props.cards
    .filter(({ type1, type2 }) => {
      return !props.filter || type1 === props.filter || type2 === props.filter;
    })
    .map(card => {
      return (
        <div>
          <img src={card.image} alt={card.name} />
        </div>
      );
    });
    
  const filterButtons = FILTERS.map(filterName => {
    return (
      <button
        key={filterName}
        onClick={() => props.cardFilterSelect(filterName)}
      >
        {filterName}
      </button>
    );
  });

  return (
    <div className="container">
      <div className="p-5 col-1">
        <div>
          <button onClick={() => props.cardFilterSelect(null)}>All</button>
          {filterButtons}
        </div>
      </div>
      <div className="row">
        <div className="col d-flex align-content-start flex-wrap">{card}</div>
      </div>
    </div>
  );
};

export default Filter;

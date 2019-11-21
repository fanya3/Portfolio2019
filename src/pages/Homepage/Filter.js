import React from "react";
import { FILTERS } from "../../non-components/Filters.js";
import { Link } from "react-router-dom";

const Filter = props => {
  const card = props.cards
    .filter(({ type1, type2 }) => {
      return !props.filter || type1 === props.filter || type2 === props.filter;
    })
    .map(card => {
      return (
        <div>
          <Link to={card.path}>
            <img className="GalleryImg" src={card.image} alt={card.name} />
          </Link>
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
    <div className="GalleryContainer">
      <button onClick={() => props.cardFilterSelect(null)}>All</button>
      {filterButtons}
      <div className="GalleryDisplay">{card}</div>
    </div>
  );
};

export default Filter;

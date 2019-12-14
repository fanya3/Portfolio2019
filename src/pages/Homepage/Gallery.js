import React from "react";
// import { FILTERS } from "../../non-components/Filters.js";
import { Link } from "react-router-dom";


const Gallery = props => {

  const card = props.cards
    .filter(({ type1, type2 }) => {
      return !props.filter || type1 === props.filter || type2 === props.filter;
    })
    .map(card => {
      return (
        <div>
          <Link to = {`/project${card.path}/${card.name}`}>
            <img className="GalleryImg" src={card.cover_image} alt={card.name} />
          </Link>
        </div>
      );
    });

  // const filterButtons = FILTERS.map(filterName => {
  //   return (
  //     <button className = "ButtonNavProject"
  //       key={filterName}
  //       onClick={() => props.cardFilterSelect(filterName)}>
  //       {filterName}
  //     </button>
  //   );
  // });

  return (
    <div className="GalleryContainer">
      {/* <div className="GalleryButtons">
        <button className = "ButtonBack" onClick={() => props.cardFilterSelect(null)}>SHOW ALL</button>
        <div className = "Border" ></div>
      {filterButtons}</div>    */}
      <div className="GalleryDisplay">{card}</div>
    </div>
  );
};

export default Gallery;
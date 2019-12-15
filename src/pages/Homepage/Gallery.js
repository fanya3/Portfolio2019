import React from "react";
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


  return (
    <div className="GalleryContainer">
      <div className="GalleryDisplay">{card}</div>
    </div>
  );
};

export default Gallery;
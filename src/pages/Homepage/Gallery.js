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
          <Link className ="CardLink" to = {`/project${card.path}/${card.name}`}>
            <div className="GalleryCard shadow-drop-2-br" style={{backgroundColor:`${card.color}`}}>
              <img className="GalleryImg" src={card.cover_image} alt={card.alt}/>
              <div className="GalleryCardText">
                <h4>{card.alt}</h4>
                <p>{card.mission}</p>
              </div> 
            </div>
  
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
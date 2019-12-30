import React from 'react';
import { FILTERS } from "../../non-components/Filters.js";
import "../../assets/css/Buttons.scss"


const ButtonsGallery = (props) => {

    const filterButtons = FILTERS.map(filterName => {
        return (
          
            <input className = "ButtonNavGallery pulsate-fwd"
              key={filterName}
              type ="button"
              value={`it's ${filterName}!`}
              onClick={() => props.cardFilterSelect(filterName)}
            />
         
        );
      });

      
    return ( 
      <>
        <div className="ButtonsGalleryContainer ButtonsLeft">
            <button className = "ButtonAllGallery" onClick={() => props.cardFilterSelect(null)}>SHOW ALL</button>
            <div className = "Border" ></div>
            <div className = "ButtonFilters">{filterButtons}</div>
        </div> 
      </>  
     );
}
 
export default ButtonsGallery;
import React from 'react';
import { FILTERS } from "../../non-components/Filters.js";



const ButtonsGallery = (props) => {

    const filterButtons = FILTERS.map(filterName => {
        return (
          <button className = "ButtonNavProject"
            key={filterName}
            onClick={() => props.cardFilterSelect(filterName)}>
            {filterName}
          </button>
        );
      });

      
    return ( 
      <>
        <div className="GalleryButtons">
            <button className = "ButtonBack" onClick={() => props.cardFilterSelect(null)}>SHOW ALL</button>
            {filterButtons}
        </div> 
      </>  
     );
}
 
export default ButtonsGallery;
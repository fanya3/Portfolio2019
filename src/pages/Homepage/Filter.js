import React from "react";
import { ButtonGroup, Button } from "reactstrap";
import { FILTERS } from "../../non-components/Filters.js";


const Filter = props => {
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
      <Button
        key={filterName}
        onClick={() => props.cardFilterSelect(filterName)}
      >
        {filterName}
      </Button>
    );
  });

  return (
    <div className="container">
      <div className="p-5 col-1">
        <ButtonGroup >
          <Button onClick={() => props.cardFilterSelect(null)}>All</Button>
          {filterButtons}
        </ButtonGroup>
      </div>
      <div className="row">
        <div className="col d-flex align-content-start flex-wrap">{card}</div>
      </div>
    </div>
  );
};

export default Filter;

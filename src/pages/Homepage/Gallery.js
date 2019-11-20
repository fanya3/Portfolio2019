import React, { Component } from "react";
import Filter from "./Filter";
import { PROJECTS } from "../../non-components/Projects";




class Gallery extends Component {
  state = {
    cards: PROJECTS,
    cardFilter: null
  };

  cardFilterSelect = filterName => {
    this.setState({ cardFilter: filterName });
  };

  render() {
    return (
      <div className="container">
        <Filter
          cards={this.state.cards}
          filter={this.state.cardFilter}
          cardFilterSelect={filterName => this.cardFilterSelect(filterName)}
        />
      </div>
    );
  }
}

export default Gallery;

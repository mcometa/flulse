import React from "react";

class FilterBar extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return <div>Filter bar</div>;
    }
  }
}

export default FilterBar;

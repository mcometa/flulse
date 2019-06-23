import React from "react";

class FilterBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    if (!this.props.show) {
      return null;
    } else {
      return <div>Filter bar</div>;
    }
  }
}

export default FilterBar;

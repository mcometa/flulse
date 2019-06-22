import React from "react";
import "./Photo.css";

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article className="photo-item">
        <img src={this.props.url} alt={this.props.title} />
      </article>
    );
  }
}

export default Photo;

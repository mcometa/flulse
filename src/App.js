import React from "react";
import "./App.css";

import Photo from "./components/Photo";
import FilterBar from "./components/FilterBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      tag: "sibuyan island",
      filterbar: false
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  componentDidMount() {
    let method = this.state.tag
      ? "flickr.photos.search"
      : "flickr.photos.getRecent";
    fetch(
      `${process.env.REACT_APP_FLICKR_API_BASE}?method=${method}&api_key=${
        process.env.REACT_APP_FLICKR_API_KEY
      }&per_page=6&page=1&tags=${this.state.tag}&format=json&nojsoncallback=1&`
    )
      .then(data => {
        return data.json();
      })
      .then(data => {
        // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
        // or
        // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
        // or
        // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
        let photosArray = data.photos.photo.map(photo => {
          let imgurl = `https://farm${photo.farm}.staticflickr.com/${
            photo.server
          }/${photo.id}_${photo.secret}.jpg`;

          return (
            <Photo
              key={photo.id}
              id={photo.id}
              url={imgurl}
              title={photo.title}
            />
          );
        });

        this.setState({
          photos: photosArray
        });
      });
  }

  handleSearch(e) {
    let method = e.target.value
      ? "flickr.photos.search"
      : "flickr.photos.getRecent";

    if (e.keyCode === 13) {
      fetch(
        `${process.env.REACT_APP_FLICKR_API_BASE}?method=${method}&api_key=${
          process.env.REACT_APP_FLICKR_API_KEY
        }&safe_search=1&per_page=6&page=1&tags=${
          e.target.value
        }&format=json&nojsoncallback=1&`
      )
        .then(data => {
          return data.json();
        })
        .then(data => {
          // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
          // or
          // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
          // or
          // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
          let photosArray = data.photos.photo.map(photo => {
            let imgurl = `https://farm${photo.farm}.staticflickr.com/${
              photo.server
            }/${photo.id}_${photo.secret}.jpg`;

            return (
              <Photo
                key={photo.id}
                id={photo.id}
                url={imgurl}
                title={photo.title}
              />
            );
          });

          this.setState({
            photos: photosArray
          });
        });
    }
  }
  handleFilterClick = e => {
    e.preventDefault();

    console.log("filter click");

    this.setState({
      filterbar: !this.state.filterbar
    });
  };

  render() {
    let filterbar = this.state.filterbar;
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="logoText">
            {" "}
            Flulse
            <br />
            <small>by mcometa</small>{" "}
          </h2>{" "}
          <div className="toolbar-search">
            <input
              type="text"
              defaultValue={this.state.tag}
              className="searchbox"
              placeholder="Search then press enter..."
              onKeyDown={e => this.handleSearch(e)}
            />{" "}
          </div>{" "}
          <div className="toolbar-filter">
            <a href="#" className="filter-btn" onClick={this.handleFilterClick}>
              Filter
            </a>
          </div>
        </header>{" "}
        <FilterBar show={this.state.filterbar} />
        <main className="Main-container">{this.state.photos} </main>
        <footer className="App-footer">
          <p> hello 2019! </p>{" "}
        </footer>{" "}
      </div>
    );
  }
}

export default App;
